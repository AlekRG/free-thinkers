import { Component, OnInit } from '@angular/core';
import { GalleryItem } from './gallery-item'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery : GalleryItem[] = []

  constructor() { }

  ngOnInit() {
    this.gallery = loadGallery();
  }

}

function loadGallery(): GalleryItem[] {
  return [{
    src: '../../assets/gallery/walking1.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking2.jpg',
    caption: 'This is a really long string to see how the text will overflow',
  },
  {
    src: '../../assets/gallery/walking3.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking4.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking5.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking6.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking7.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking8.jpg',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking9.png',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking10.png',
    caption: 'It\'s a thing',
  },
  {
    src: '../../assets/gallery/walking11.png',
    caption: 'It\'s a thing',
  },{
    src: '../../assets/gallery/walking12.png',
    caption: 'It\'s a thing',
  },];
}
 