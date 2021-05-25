import { Component, OnInit } from '@angular/core';

export interface Score {
  name: string;
  updated: Date;
  count: number;
  rank: number;
  image?: string;
  trend?: number;
}

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss'],
})
export class HighscoresComponent implements OnInit {
  today: number = Date.now();

  scores: Score[] = [
    {
      name: 'Hana',
      updated: new Date('1/1/16'),
      count: 11230,
      rank: 22,
      image: '/assets/user 3 Hana.jpg',
      trend: 0,
    },
    {
      name: 'Ljubica',
      updated: new Date('1/1/16'),
      count: 1564,
      rank: 23,
      image: '/assets/user 1 Ljubica.jpg',
      trend: 0,
    },
    {
      name: 'Aleksandar',
      updated: new Date('1/1/16'),
      count: 78,
      rank: 24,
      image: '/assets/user 2 Aleksandar.jpg',
      trend: 1,
    },
    {
      name: 'Veljko',
      updated: new Date('1/1/16'),
      count: 11,
      rank: 25,
      image: '/assets/user 4 Veljko.jpg',
      trend: 1,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
