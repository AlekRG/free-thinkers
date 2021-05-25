import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'free-thinkers-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  description: string = ''
  image = null;

  constructor() { }

  ngOnInit(): void {
  }

}
