import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'free-thinkers-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'First',
        link: './first',
        index: 0,
      },
      {
        label: 'Shopping',
        link: './shoppingSection',
        index: 1,
      },
      {
        label: 'High Scores',
        link: './highscores',
        index: 2,
      },
      {
        label: 'Fourth',
        link: './fourth',
        index: 3,
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
