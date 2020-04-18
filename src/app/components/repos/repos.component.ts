import { Component, OnInit, ViewChild, Input, OnChanges, DoCheck, AfterViewChecked, AfterContentInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Moment } from 'moment';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges, AfterContentInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  constructor() { }
  

  @Input('data') data = {
    sortDate: new Date('YY-MM-dd'),
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
    console.log("after view init", this.data);
    
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

}
