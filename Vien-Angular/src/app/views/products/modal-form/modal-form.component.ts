import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Regions } from "./regions";

@Component({
  selector: "modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.scss"],
})
export class ModalFormComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  selectedCountry: string;

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
  changeCountry(city: string) {
    Regions.forEach((item) => {
      let selectedItem = Object.keys(item.name).join();

      if (selectedItem == city) {
        this.regions = [];
        this.regions.push(item.name[city]);
      }
    });
    console.log(this.regions);
  }
}
