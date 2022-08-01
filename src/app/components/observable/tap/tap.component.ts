import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  subscription!: Subscription;

  constructor(
    private utils: UtilitiesService
  ) { }

  ngOnInit(): void {
    const names: string[] = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5", "Name 6", "Name 7", "Name 8", "Name 9", "Name 10",]
    const source = interval(1500);

    this.subscription = source
    .pipe(
      tap(index => {
        if(index === 4){
          this.subscription.unsubscribe();
        }
      }),
      map(data => names[data])
    )
    .subscribe(res => {
      this.utils.appendList(res, 'elContainer');
    });
  }

}
