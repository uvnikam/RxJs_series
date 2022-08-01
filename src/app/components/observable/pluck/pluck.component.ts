import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  users = [
    {
      name: "Name 1",
      skills: "Angular", 
      job: {
        title: 'Angular Developer',
        exp: '11 years'
      }
    },
    {
      name: "Name 2",
      skills: "React", 
      job: {
        title: 'React Developer',
        exp: '12 years'
      }
    },
    {
      name: "Name 3",
      skills: "Veu", 
      job: {
        title: 'Vue Developer',
        exp: '13 years'
      }
    },
    {
      name: "Name 4",
      skills: "Ember", 
      job: {
        title: 'Ember Developer',
        exp: '14 years'
      }
    },
  ];

  data: string[] = [];
  data2: string[] = [];

  constructor() { }

  ngOnInit(): void {

    // Ex - 01
    from(this.users)
    .pipe(
      pluck('name'),
      toArray()
    )
    .subscribe(res => {
      this.data = res;
    });

    // Ex - 02
    from(this.users)
    .pipe(
      pluck('job', 'title'),
      toArray()
    )
    .subscribe(res => {
      this.data2 = res;
    });

  }

}
