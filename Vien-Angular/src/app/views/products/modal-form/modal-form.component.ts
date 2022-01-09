import { Component, OnInit, ViewChild } from "@angular/core";
import { NgSelectComponent } from "@ng-select/ng-select";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Regions } from "./regions";

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

  quantity = 1;

  citiesArray: Array<string> = [];
  regions: Array<string> = [];

  constructor(public bsModalRef: BsModalRef) {}

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
  }
  changeCountry(city: string, value) {
    value.viewModel = "";
    console.log(this.ngSelectComponent);

    this.regions = [];
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
    console.log(this.quantity);
  }
}
