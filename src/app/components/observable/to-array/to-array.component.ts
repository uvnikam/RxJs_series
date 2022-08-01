import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  users = [
    {name: "User1", skill: 'Angular'},
    {name: "User2", skill: 'Html, CSS'},
    {name: "User3", skill: 'Java'},
    {name: "User4", skill: 'Javascript, Typescript'},
    {name: "User5", skill: 'Oracle'},
  ];
  sourceSub!: Subscription;

  ngOnInit(): void {

    // Ex - 01
    const source = interval(1000);
    this.sourceSub = source
    .pipe(
      take(5),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
    });

    // Ex - 02
    const source2 = from(this.users);
    this.sourceSub = source2
    .pipe(toArray())
    .subscribe(res => {
      console.log(res);
    });

    // Ex - 03
    const source3 = of('User1', 'User2', 'User3', 'User4');
    this.sourceSub = source3
    .pipe(toArray())
    .subscribe(res => {
      console.log(res);
    });
  }

}
