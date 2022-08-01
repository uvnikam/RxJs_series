import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  constructor(
    private utils: UtilitiesService
  ) { }

  techStatus: string = '';
  techStatus2: string = '';
  techStatus3: string = '';
  names: string = '';
  subscription2!: Subscription;

  ngOnInit(): void {

    // Ex - 01 (Manual) 

    const customObs1 = new Observable(observer => {

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('Html & CSS');
        observer.complete();
      }, 3000);

      setTimeout(() => {
        observer.next('Java');
        observer.error(new Error('Custom Error Msg: LIMIT EXCEEDED'));
      }, 4000);

      setTimeout(() => {
        observer.next('Oracle');
      }, 5000);

    })

    customObs1.subscribe(
      (res: any) => {
        this.utils.appendList(res, 'elContainer')
      },
      (error: any) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      },
    );

    // Ex - 02 (Custom Interval)
    const arr2 = ['Angular', 'Typescript', 'Html & CSS', 'Java', 'Oracle'];
    const customObs2 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count]);
       
        if(count >=2) {
          observer.error(new Error('Interval error'));
        }
        
        if(count >=5) {
          observer.complete();
        }
        count++;
      }, 1000)
    });

    this.subscription2 = customObs2.subscribe(
      (res: any) => {
        // console.log(res);
        this.utils.appendList(res, 'elContainer2')
      },
      (error: any) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      },
    );

    // Ex - 03 (Random Names)
    const arr3 = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6'];
    const customObs3 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr3[count]);
       
        if(count >=3) {
          observer.error(new Error('Interval error'));
        }
        
        if(count >=6) {
          observer.complete();
        }
        count++;
      }, 1000)
    });

    customObs3.subscribe(
      (res: any) => {
        // console.log(res);
        this.names = res;
      },
      (error: any) => {
        this.techStatus3 = 'error';
      },
      () => {
        this.techStatus3 = 'completed';
      },
    );

  }

  ngOnDestroy(): void {
    this.subscription2.unsubscribe();
  }

}
