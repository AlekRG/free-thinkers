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
      count: 13230,
      rank: 22,
      image: '/assets/user 3 Hana.jpg',
      trend: 0,
    },
    {
      name: 'Ljubica',
      updated: new Date('1/1/16'),
      count: 11004,
      rank: 23,
      image: '/assets/user 1 Ljubica.jpg',
      trend: 0,
    },
    {
      name: 'Aleksandar',
      updated: new Date('1/1/16'),
      count: 12030,
      rank: 24,
      image: '/assets/user 2 Aleksandar.jpg',
      trend: 1,
    },
    {
      name: 'Veljko',
      updated: new Date('1/1/16'),
      count: 10236,
      rank: 25,
      image: '/assets/user 4 Veljko.jpg',
      trend: 1,
    },
    {
      name: 'Marko',
      updated: new Date('1/1/16'),
      count: 1546,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Wassim',
      updated: new Date('1/1/16'),
      count: 1112,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Strahinja',
      updated: new Date('1/1/16'),
      count: 12853,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Uros',
      updated: new Date('1/1/16'),
      count: 7894,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Milos',
      updated: new Date('1/1/16'),
      count: 3369,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Ivan',
      updated: new Date('1/1/16'),
      count: 357,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Marwen',
      updated: new Date('1/1/16'),
      count: 1596,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Steven',
      updated: new Date('1/1/16'),
      count: 1758,
      rank: 25,

      trend: 1,
    },
    {
      name: 'Zvezdana',
      updated: new Date('1/1/16'),
      count: 6654,
      rank: 25,

      trend: 1,
    },
    {
      name: 'Suncica',
      updated: new Date('1/1/16'),
      count: 13540,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Ruzica',
      updated: new Date('1/1/16'),
      count: 9099,
      rank: 25,
      trend: 1,
    },
    {
      name: 'Miroslav',
      updated: new Date('1/1/16'),
      count: 11,
      rank: 25,
      trend: 0,
    },
    {
      name: 'Nikola',
      updated: new Date('1/1/16'),
      count: 4567,
      rank: 25,
      trend: 0,
    },
    {
      name: 'Ana',
      updated: new Date('1/1/16'),
      count: 987,
      rank: 25,
      trend: 1,
    },
  ].sort((a, b) => (a.count < b.count) ? 1 : -1);

  constructor() {}

  ngOnInit() {}
}
