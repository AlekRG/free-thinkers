import { Component, OnInit } from '@angular/core';

export interface Score {
  name: string;
  updated: Date;
  count: number;
  rank: number;
  image?: string;
}

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss'],
})
export class HighscoresComponent implements OnInit {
  scores: Score[] = [
    {
      name: 'Hana',
      updated: new Date('1/1/16'),
      count: 11230,
      rank: 122,
      image: '/assets/user 3 Hana.jpg',
    },
    {
      name: 'Ljubica',
      updated: new Date('1/1/16'),
      count: 1564,
      rank: 123,
      image: '/assets/user 1 Ljubica.jpg',
    },
    {
      name: 'Aleksandar',
      updated: new Date('1/1/16'),
      count: 78,
      rank: 124,
      image: '/assets/user 2 Aleksandar.jpg',
    },
    {
      name: 'Veljko',
      updated: new Date('1/1/16'),
      count: 11,
      rank: 125,
      image: '/assets/user 4 Veljko.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
