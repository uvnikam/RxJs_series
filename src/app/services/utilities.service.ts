import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  appendList(countVal: string, elmId: string){
    let li = document.createElement('li');
    li.innerText = countVal;
    document.getElementById(elmId)?.appendChild(li);
  }
}
