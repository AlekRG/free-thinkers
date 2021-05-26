import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataSubject: BehaviorSubject<number>;

  constructor() {
    this.dataSubject = new BehaviorSubject(32019);
   }
}

