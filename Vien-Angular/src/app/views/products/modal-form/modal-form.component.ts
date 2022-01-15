import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NgSelectComponent } from "@ng-select/ng-select";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Regions } from "./regions";
import { ProductCategory } from "./product-category.mock";
import { ProductCategoryModel } from "./product-category.model";

@Component({
  selector: "modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.scss"],
})
export class ModalFormComponent implements OnInit {
  @ViewChild(NgSelectComponent) ngSelectComponent: NgSelectComponent;
  title: string;
  closeBtnName: string;
  list: any[] = [];
  selectedCountry: string;
  status: boolean = false;
  phoneNumber: string;

  productCategory: ProductCategoryModel[] = ProductCategory;

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
  quantity = 1;

  citiesArray: Array<string> = [];
  regions: Array<string> = [];

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
