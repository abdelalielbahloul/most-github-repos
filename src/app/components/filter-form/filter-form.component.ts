import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  data = {
    sortDate: new Date(),
    sortValue: 'stars'
  }
  
  sendData = {}

  sortControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
  sortData = ['stars', 'forks', 'updated']
  
  maxDate = new Date();
  minDate = new Date(2008, 4, 10) // Github Creation date
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.sendData = this.data;
    this.data = {
      sortDate: new Date(),
      sortValue: 'stars'
    }
  }

}
