import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'free-thinkers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly conversion = 15000;
  readonly dataDaily = [
    {
      date: new Date('03.12.2021'),
      steps: 14000,
      tokens: 14000 / this.conversion,
    },
    {
      date: new Date('03.13.2021'),
      steps: 12000,
      tokens: 12000 / this.conversion,
    },
    {
      date: new Date('03.15.2021'),
      steps: 13123,
      tokens: 13123 / this.conversion,
    },
    {
      date: new Date('03.16.2021'),
      steps: 8200,
      tokens: 8200 / this.conversion,
    },
  ];
  readonly dataChartSteps = [
    {
      name: new Date('03.12.2021'),
      value: 14000,
    },
    {
      name: new Date('03.13.2021'),
      value: 12000,
    },
    {
      name: new Date('03.15.2021'),
      value: 13123,
    },
    {
      name: new Date('03.16.2021'),
      value: 8200,
    },
  ];
  readonly dataChartTokens = [
    {
      name: new Date('03.12.2021').toDateString(),
      value: 14000 / this.conversion,
    },
    {
      name: new Date('03.13.2021').toDateString(),
      value: 12000 / this.conversion,
    },
    {
      name: new Date('03.15.2021').toDateString(),
      value: 13123 / this.conversion,
    },
    {
      name: new Date('03.16.2021').toDateString(),
      value: 8200 / this.conversion,
    },
  ];
  readonly dataSum = {
    steps: 14000 + 1200 + 13123 + 8200,
    tokens: (14000 + 1200 + 13123 + 8200) / this.conversion,
  };

  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'First',
        link: './first',
        index: 0,
        img: '../assets/community.png',
      },
      {
        label: 'Shopping',
        link: './shoppingSection',
        index: 1,
        img: '../assets/cart.png',
      },
      {
        label: 'High Scores',
        link: './highscores',
        index: 2,
        img: '../assets/rank.png',
      },
      {
        label: 'Fourth',
        link: './fourth',
        index: 3,
        img: '../assets/settings.png',
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
