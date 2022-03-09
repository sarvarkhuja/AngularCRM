import { Component, ViewChild, ViewEncapsulation, Inject } from "@angular/core";
import { extend, addClass } from "@syncfusion/ej2-base";
import {
  KanbanComponent,
  ColumnsModel,
  CardSettingsModel,
  SwimlaneSettingsModel,
  DialogSettingsModel,
  CardRenderedEventArgs,
} from "@syncfusion/ej2-angular-kanban";
import { cardData } from "./data";
import { OrdersListService } from "../../services/orders-list.service";
import { getOrderKanban } from "../../models/getOrderKanban.model";

@Component({
  selector: "app-single-order",
  templateUrl: "./single-order.component.html",
  styleUrls: ["./single-order.component.scss"],
})
export class SingleOrderComponent {
  orderList: getOrderKanban[];
  kanbanData: Object[];
  @ViewChild("kanbanObj") kanbanObj: KanbanComponent;

  public cardSettings: CardSettingsModel = {
    contentField: "ContactPhone",
    headerField: "ProductName",
  };
  constructor(private $data: OrdersListService) {}

  ngOnInit() {
    this.$data.getKanbanOrderList().subscribe((w) => {
      this.orderList = w.result;
      console.log(this.orderList);

      this.kanbanData = extend([], this.orderList, null, true) as Object[];
    });
  }
}
