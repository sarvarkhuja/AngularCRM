import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { ModalFormComponent } from "../modal-form/modal-form.component";

@Component({
  selector: "order-container",
  templateUrl: "./order-container.component.html",
  styleUrls: ["./order-container.component.scss"],
})
export class OrderContainerComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private translateService: TranslateService
  ) {}

  openModalWithComponent() {
    const initialState = {
      list: ["...", ".."],
    };
    this.bsModalRef = this.modalService.show(ModalFormComponent, {
      initialState,
    });
    this.bsModalRef.content.closeBtnName =
      this.translateService.instant("modal.close");
  }

  ngOnInit() {}
}
