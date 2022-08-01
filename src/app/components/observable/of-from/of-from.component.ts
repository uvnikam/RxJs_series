import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg: any;
  constructor(
    private utils: UtilitiesService
  ) { }

  ngOnInit(): void {

    // of
    const obs1 = of('ofArgument1', 'ofArgument2', 'ofArgument3');

    obs1.subscribe(res => {
      this.utils.appendList(res, 'elContainer')
    })

    const obs2 = of({key1: 'Value 1', key2: 'Value 2', key3: 'Value 3'});

    obs2.subscribe((res) => {
      this.obsMsg = res;
      // this.utils.appendList(res, 'elContainer')
    })

    // From
    const obs3 = from(['fromArgument1', 'fromArgument2', 'fromArgument3']);

    obs3.subscribe(res => {
      this.utils.appendList(res, 'elContainer3')
    })

    // From - Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {resolve("Promise resolved")}, 3000)
    });

    promise.then(res => {
      console.log(res)
    })

    const obs4 = from(promise);

    obs4.subscribe((res: any) => {
      this.utils.appendList(res, 'elContainer4')
    })

    // From - String

    const obs5 = from("Welcome to RxJs Session");

    obs5.subscribe(res => {
      this.utils.appendList(res, 'elContainer5')
    })
  } 

}
