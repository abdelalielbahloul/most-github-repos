import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {

  sortControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
  sortData = ['stars', 'forks', 'updated']
  
  maxDate = new Date();
  minDate = new Date(2008, 4, 10) // Github Creation date
  constructor() { }

  ngOnInit(): void {
  }

}
