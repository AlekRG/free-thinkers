import { Component, OnInit } from '@angular/core';
import { data } from './tokensHistory.data';

@Component({
  selector: 'free-thinkers-tokens-history',
  templateUrl: './tokensHistory.component.html',
  styleUrls: ['./tokensHistory.component.scss'],
})
export class TokensHistoryComponent implements OnInit {
  dataChartTokens = data;
  constructor() {}

  ngOnInit() {}
}
