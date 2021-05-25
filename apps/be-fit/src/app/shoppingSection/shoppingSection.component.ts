import { Component, OnInit } from '@angular/core';

export interface Shop {
  name: string;
  image?: string;
}

@Component({
  selector: 'app-shopping-section',
  templateUrl: './shoppingSection.component.html',
  styleUrls: ['./shoppingSection.component.scss'],
})

export class ShoppingSectionComponent implements OnInit {
  shops: Shop[] = [
    { name: 'Tehnomanija', image: '/assets/Tehnomanija.png' },
    { name: 'Gigatron', image: '/assets/Gigatron.png' },
    { name: 'Intersport', image: '/assets/Intersport.png'},
    { name: 'Sportvision', image: '/assets/Sportvision.png'},
    { name: 'Tehnomanija', image: '/assets/Tehnomanija.png' },
    { name: 'Gigatron', image: '/assets/Gigatron.png' },
    { name: 'Intersport', image: '/assets/Intersport.png'},
    { name: 'Sportvision', image: '/assets/Sportvision.png'}
  ];

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("hello");
  }
}
