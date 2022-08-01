import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(
    private utils: UtilitiesService
  ) { }

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe(res => {
      let countVal: string = `Video ${count++}`
      this.utils.appendList(countVal, 'elContainer');
    })
  }

  

}
