import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

export interface dataInterface {
  id: number,
  name: string,
  gender: string,
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr: dataInterface[] = [
    {id: 1, name: 'Name 1', gender: 'Male'},
    {id: 2, name: 'Name 2', gender: 'Female'},
    {id: 3, name: 'Name 3', gender: 'Male'},
    {id: 4, name: 'Name 4', gender: 'Male'},
    {id: 5, name: 'Name 5', gender: 'Female'},
    {id: 6, name: 'Name 6', gender: 'Female'},
    {id: 7, name: 'Name 7', gender: 'Male'},
    {id: 8, name: 'Name 8', gender: 'Female'},
    {id: 9, name: 'Name 9', gender: 'Female'},
    {id: 10, name: 'Name 10', gender: 'Female'},
    {id: 11, name: 'Name 11', gender: 'Male'},
    {id: 12, name: 'Name 12', gender: 'Male'},
  ];

  data1: dataInterface[] = [];
  data2: dataInterface[] = [];
  data3: dataInterface[] = [];


  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr);

    // Ex - 01 - Filter by name's length 
    source
    .pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
    .subscribe(res => {
      this.data1 = res;
    });

    // Ex - 02 - Filter by Gender
    source
    .pipe(
      filter(member => member.gender === 'Female'),
      toArray()
    )
    .subscribe(res => {
      this.data2 = res;
    });

    // Ex - 03 - Filter by nth item
    source
    .pipe(
      filter(member => member.id <= 6),
      toArray()
    )
    .subscribe(res => {
      this.data3 = res;
    });
  }

}
