import { Component, OnInit } from '@angular/core';
import { data } from './stepsHistory.data';

@Component({
  selector: 'free-thinkers-steps-history',
  templateUrl: './stepsHistory.component.html',
  styleUrls: ['./stepsHistory.component.scss'],
})
export class StepsHistoryComponent implements OnInit {
  dataChartSteps = data;
  constructor() {}

  ngOnInit() {}
}
