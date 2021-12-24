import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { ICarouselImage, carouselImages, carouselThumbs } from 'src/app/data/carousels';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  detailImages: ICarouselImage[] = carouselImages;
  detailThumbs: ICarouselImage[] = carouselThumbs;
  constructor(private $data:ProductsService) { }

  ngOnInit() {
    this.$data.userProfilesGet().subscribe(w=>{
      console.log(w);
      
    })
  }

}
