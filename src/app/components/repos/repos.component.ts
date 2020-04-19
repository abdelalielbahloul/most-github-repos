import { RepositoryService } from './../../services/repository.service';
import { Component, OnInit, ViewChild, Input, OnChanges, DoCheck, AfterViewChecked, AfterContentInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { GithubAPI } from 'src/app/models/github-api';
import { merge, Observable, of as observableOf } from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges, AfterContentInit {

  ELEMENT_DATA: GithubAPI[] = []
  resultsLength: number = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  constructor(private api: RepositoryService) { }

  displayedColumns: string[] = ['name', 'created_at', 'stargazers_count', 'open_issues_count', 'forks_count', 'language', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA) || null;
  
  

  @Input('data') data = {
    sortDate: new Date(),
    sortValue: 'stars'
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;    
    this.init();
  }

  /**
   * fetching data with default infos in loading of page
   */
  ngAfterContentInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // console.log("after view init", this.data);
    // setTimeout(() => {
      merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        
        return this.api!._getRepos(
          "2020-03-19", 
          this.data.sortValue, this.sort.direction || 'desc', 
          this.paginator.pageIndex
        );
      }),
      map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;        

        return data.items;
      }),
      catchError((err) => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => {
      console.log(data);
      
      this.dataSource = new MatTableDataSource(data);
      
    });
    // }, 5000);
    
  }

  /**
   *  fetching data after any submit of form with new infos
   */
  ngOnChanges(): void {
    console.log("changed",this.data);
    
  }
  

  filter(filterText: String) {
    this.dataSource.filter = filterText.trim().toLocaleLowerCase();
  }
  show(element) {
    console.log(element);
    
  }

  init() {
    this.data = {
      sortDate: new Date(),
      sortValue: "stars"
    }
  }

  formateDate(): string {
    // {year: "numeric", month: "2-digit", day: "2-digit"}
    let year = this.data.sortDate.getFullYear();
    let mounth = this.data.sortDate.getMonth();
    let day = this.data.sortDate.getDate()
    return `${year}-0${mounth + 1}-0${day}`
  }

}
