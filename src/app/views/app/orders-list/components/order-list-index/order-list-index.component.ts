import { GetOrderModel } from "./../../models/getOrder.model";
import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { OrdersListService } from "../../services/orders-list.service";

@Component({
  selector: "app-order-list-index",
  templateUrl: "./order-list-index.component.html",
  styleUrls: ["./order-list-index.component.scss"],
})
export class OrderListIndexComponent implements OnInit {
  orderList: GetOrderModel[];

  columns = [
    { name: "FirstName" },
    { name: "ContactPhone" },
    { name: "DeliveryAddress" },
    { name: "Quantity" },
    { name: "OrderTotalSum" },
    { name: "Status" },
    { name: "TrackingId" },
  ];
  ColumnMode = ColumnMode;

  constructor(private $data: OrdersListService) {}

  ngOnInit() {
    this.$data.getOrderList().subscribe((w) => {
      this.orderList = w.result;
    });
  }
}
