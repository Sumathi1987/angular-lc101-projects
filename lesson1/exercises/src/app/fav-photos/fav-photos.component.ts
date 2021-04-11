import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photo';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_960_720.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg';

  constructor() { }

  ngOnInit() {
  }

}