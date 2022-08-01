import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  subscription!: Subscription;

  constructor(
    private utils: UtilitiesService
  ) { }

  ngOnInit(): void {
    
    // const broadcastVideo = interval(1000);

    // timer(delay, interval) 
    const broadcastVideo = timer(5000, 1000);


    this.subscription = broadcastVideo.subscribe(res => {
      console.log(res);

      this.utils.appendList(`User ${res}`, 'elContainer1');
      this.utils.appendList(`User ${res}`, 'elContainer2');
      this.utils.appendList(`User ${res}`, 'elContainer3');

      if(res>=5) this.subscription.unsubscribe()
    })
  }

}
