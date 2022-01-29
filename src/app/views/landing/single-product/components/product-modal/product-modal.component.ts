import { SingleProductService } from "./../../services/single-product.service";
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
  status: boolean = false;
  phoneNumber: string;

  query = {
    firstName: "",
    city: "",
    district: "",
    promocode: "",
    categoryName: "",
    quantity: 1,
    phoneNumber: "+(998)",
  };
  productCategory: ProductCategoryModel[] = ProductCategory;

  quantity = 1;

  citiesArray: Array<string> = [];
  districts: Array<string> = [];

  form: FormGroup;
  constructor(
    fb: FormBuilder,
    public bsModalRef: BsModalRef,
    private $data: SingleProductService
  ) {
    this.form = fb.group({
      firstName: "",
      city: "",
      district: "",
      promocode: "",
      productVersionId: 0,
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
    this.query = this.form.value;

    this.$data.addSingleOrder(this.form.value).subscribe();
  }
  selectCategory(event, status, index) {
    this.productCategory.forEach((item) => (item.selected = false));
    this.productCategory[index].selected =
      !this.productCategory[index].selected;
    this.form.patchValue({
      productVersionId: this.productCategory[index].id,
    });
  }
  changecity(city: string) {
    this.districts = [];
    this.form.patchValue({
      district: "",
    });

    Regions.forEach((item) => {
      let selectedItem = Object.keys(item.name).join();
      if (selectedItem == city) {
        this.districts = item.name[city];
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
