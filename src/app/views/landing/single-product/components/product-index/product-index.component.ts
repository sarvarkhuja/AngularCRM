import { Component, OnInit } from "@angular/core";
import { $ } from "protractor";
import {
  carouselImages,
  carouselThumbs,
} from "../../mock-data/product-slider.mock";
import { ProductSlider } from "../../models/product-slider.model";
import { SingleProductService } from "../../services/single-product.service";

@Component({
  selector: "product-index",
  templateUrl: "./product-index.component.html",
  styleUrls: ["./product-index.component.scss"],
})
export class ProductIndexComponent implements OnInit {
  detailImages: ProductSlider[] = carouselImages;
  detailThumbs: ProductSlider[] = carouselThumbs;
  constructor(private $data: SingleProductService) {}

  ngOnInit() {
    this.$data.getAllProductList().subscribe((w) => {
      console.log(w);
    });
  }
}
