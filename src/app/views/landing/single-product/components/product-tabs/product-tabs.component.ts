import { ProductRating } from "../../models/product-comment.model";
import { Component, OnInit } from "@angular/core";
import { productRating } from "../../mock-data/product-rating.mock";
import { ProductFAQ } from "../../models/product-faq.model";
import { productFAQ } from "../../mock-data/product-faq.mock";

@Component({
  selector: "product-tabs",
  templateUrl: "./product-tabs.component.html",
  styleUrls: ["./product-tabs.component.scss"],
})
export class ProductTabsComponent implements OnInit {
  comments: ProductRating[] = productRating;
  questions: ProductFAQ[] = productFAQ;
  constructor() {}

  ngOnInit() {}
}
