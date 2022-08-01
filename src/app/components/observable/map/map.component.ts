import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // Subscription
  subscription1!: Subscription;
  subscription2!: Subscription;

  // Message
  msg1: string = '';
  msg2: number = 0;
  
  constructor(
    private utils: UtilitiesService
  ) { }
  
  ngOnInit(): void {

    const broadcastVideos = interval(1000);
    
    // Ex - 01
    this.subscription1 = broadcastVideos
    .pipe(
      map(data => `Video ${data}`)
    )
    .subscribe(res => {
      this.msg1 = res;
    });

    setTimeout(() => {
      this.subscription1.unsubscribe();
    }, 10000);

    // Ex - 02
    this.subscription2 = broadcastVideos
    .pipe(map(data => data * 3))
    .subscribe(res => {
      this.msg2 = res;
    })

    setTimeout(() => {
      this.subscription2.unsubscribe();
    }, 10000);

    // Ex - 03
    const members = from([
      {id: 1, name: 'Name 1',},
      {id: 2, name: 'Name 2',},
      {id: 3, name: 'Name 3',},
      {id: 4, name: 'Name 4',},
      {id: 5, name: 'Name 5',},
      {id: 6, name: 'Name 6',},
      {id: 7, name: 'Name 7',},
      {id: 8, name: 'Name 8',},
    ]);

    members
    .pipe(map(data => data.name))
    .subscribe(res => {
      this.utils.appendList(res, 'elContainer')
    });
  }

}
