import { SingleOrderComponent } from "./components/single-order/single-order.component";
import { OrdersListComponent } from "./orders-list.component";
import { Routes, RouterModule } from "@angular/router";
import { OrderListIndexComponent } from "./components/order-list-index/order-list-index.component";

const routes: Routes = [
  {
    path: "",
    component: OrdersListComponent,
    children: [
      { path: "", redirectTo: "order-list", pathMatch: "full" },
      { path: "order-list", component: OrderListIndexComponent },
      { path: "order-kanban", component: SingleOrderComponent },
    ],
  },
];

export const OrdersListRoutes = RouterModule.forChild(routes);
