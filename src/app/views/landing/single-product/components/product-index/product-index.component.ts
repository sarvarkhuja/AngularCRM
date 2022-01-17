import { Component, OnInit } from "@angular/core";
import {
  carouselImages,
  carouselThumbs,
} from "../../mock-data/product-slider.mock";
import { ProductSlider } from "../../models/product-slider.model";

@Component({
  selector: "product-index",
  templateUrl: "./product-index.component.html",
  styleUrls: ["./product-index.component.scss"],
})
export class ProductIndexComponent implements OnInit {
  detailImages: ProductSlider[] = carouselImages;
  detailThumbs: ProductSlider[] = carouselThumbs;
  constructor() {}

  ngOnInit() {}
}
