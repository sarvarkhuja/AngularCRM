import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html'
})
export class ProfilePhotosComponent implements OnInit {
  album = [
    {
      src: '/assets/img/secondary-1.jpeg',
      thumb: '/assets/img/secondary-1.jpeg'
    },
    {
      src: '/assets/img/secondary-2.jpeg',
      thumb: '/assets/img/secondary-2.jpeg'
    },
    {
      src: '/assets/img/secondary-3.jpeg',
      thumb: '/assets/img/secondary-3.jpeg'
    },
    {
      src: '/assets/img/secondary-4.jpeg',
      thumb: '/assets/img/secondary-4.jpeg'
    },

  ];
  constructor(private lightbox: Lightbox) {
  }

  openLightbox(index: number): void {
    this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
  }

  close(): void {
    this.lightbox.close();
  }


  ngOnInit() {
  }

}
