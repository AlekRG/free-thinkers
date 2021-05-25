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

  onSelectFile($event:any) { // called each time file input changes
    console.log($event);
    
    if ($event.target && $event.target.files && $event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL($event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.gallery.unshift({src:event?.target?.result,user_pic:'/assets/user 1 Ljubica.jpg', user_name: "Ljubica", date: 'May 26 2021'});
        
      }
    }
}

}

function loadGallery(): GalleryItem[] {
  return [{
    src: '../../assets/gallery/walking1.jpg',
    user_pic: '/assets/user 4 Veljko.jpg',
    user_name: 'Veljko',
    date: 'May 25 2021',
  },
  {
    src: '../../assets/gallery/walking2.jpg',
    user_pic: '/assets/user 2 Aleksandar.jpg',
    user_name: 'Aleksandar',
    date: 'May 25 2021',
  },
  {
    src: '../../assets/gallery/walking3.jpg',
    user_pic: '/assets/user 3 Hana.jpg',
    user_name: 'Hana',
    date: 'May 24 2021',
  },
  {
    src: '../../assets/gallery/walking4.jpg',
    user_pic: '/assets/user 4 Veljko.jpg',
    user_name: 'Veljko',
    date: 'May 24 2021',
  },
  {
    src: '../../assets/gallery/walking5.jpg',
    user_pic: '/assets/user 1 Ljubica.jpg',
    user_name: 'Ljubica',
    date: 'May 23 2021',
  },
  {
    src: '../../assets/gallery/walking6.jpg',
    user_pic: '/assets/user 2 Aleksandar.jpg',
    user_name: 'Aleksandar',
    date: 'May 22 2021',
  },
  {
    src: '../../assets/gallery/walking7.jpg',
    user_pic: '/assets/user 3 Hana.jpg',
    user_name: 'Hana',
    date: 'May 22 2021',
  },
  {
    src: '../../assets/gallery/walking8.jpg',
    user_pic: '/assets/user 4 Veljko.jpg',
    user_name: 'Veljko',
    date: 'May 21 2021',
  },
  {
    src: '../../assets/gallery/walking10.png',
    user_pic: '/assets/user 1 Ljubica.jpg',
    user_name: 'Ljubica',
    date: 'May 21 2021',
  },
  {
    src: '../../assets/gallery/walking11.png',
    user_pic: '/assets/user 1 Ljubica.jpg',
    user_name: 'Ljubica',
    date: 'May 20 2021',
  }];
}
 