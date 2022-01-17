import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NgSelectComponent } from "@ng-select/ng-select";
import { BsModalRef } from "ngx-bootstrap";
import { ProductCategory } from "../../mock-data/product-category.mock";
import { Regions } from "../../mock-data/regions.mock";
import { ProductCategoryModel } from "../../models/product-category.model";

@Component({
  selector: "product-modal",
  templateUrl: "./product-modal.component.html",
  styleUrls: ["./product-modal.component.scss"],
})
export class ProductModalComponent implements OnInit {
  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;
  title: string;
  closeBtnName: string;
  list: any[] = [];
  selectedCountry: string;
  status: boolean = false;
  phoneNumber: string;

  productCategory: ProductCategoryModel[] = ProductCategory;

  quantity = 1;

  citiesArray: Array<string> = [];
  regions: Array<string> = [];

  form: FormGroup;
  constructor(fb: FormBuilder, public bsModalRef: BsModalRef) {
    this.form = fb.group({
      fullName: "",
      country: "",
      region: "",
      promocode: "",
      categoryName: "",
      quantity: this.quantity,
      phoneNumber: ["+(998)"],
    });
  }

  ngOnInit() {
    this.getCities();
  }
  submitted = false;

  getCities() {
    for (const [key, value] of Object.entries(Regions)) {
      this.citiesArray.push(Object.keys(value.name).join());
    }
  }
  onSubmit() {
    this.submitted = true;
    console.log("Form values: ", this.form.value);
  }
  selectCategory(event, status, index) {
    this.productCategory.forEach((item) => (item.selected = false));
    this.productCategory[index].selected =
      !this.productCategory[index].selected;
    this.form.patchValue({
      categoryName: this.productCategory[index].categoryTitle,
    });
  }
  changeCountry(city: string) {
    this.regions = [];
    this.form.patchValue({
      region: "",
    });

    Regions.forEach((item) => {
      let selectedItem = Object.keys(item.name).join();
      if (selectedItem == city) {
        this.regions = item.name[city];
      }
    });
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  increment() {
    this.quantity++;
  }
}
