import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ProductModalComponent } from "../product-modal/product-modal.component";

@Component({
  selector: "product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.scss"],
})
export class ProductDescriptionComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private translateService: TranslateService
  ) {}

  openModalWithComponent() {
    const initialState = {
      list: ["...", ".."],
    };
    this.bsModalRef = this.modalService.show(ProductModalComponent, {
      initialState,
    });
    this.bsModalRef.content.closeBtnName =
      this.translateService.instant("modal.close");
  }

  ngOnInit() {}
}
