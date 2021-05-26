import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'free-thinkers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-material-tab-router';
  steps = 0;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, private dataService: DataService) {
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
    this.dataService.dataSubject.subscribe((steps) => (this.steps = steps));
  }
}
