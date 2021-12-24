import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderStatusComponent } from "./order-status/order-status.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardsComponent } from "./dashboards.component";
import { DefaultComponent } from "./default/default.component";
import { ContentComponent } from "./content/content.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { EcommerceComponent } from "./ecommerce/ecommerce.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardsComponent,
    children: [
      { path: "", redirectTo: "default", pathMatch: "full" },
      { path: "default", component: DefaultComponent },
      { path: "content", component: ContentComponent },
      { path: "analytics", component: AnalyticsComponent },
      { path: "ecommerce", component: EcommerceComponent },
      { path: "order", component: OrdersComponent },
      { path: "order-status", component: OrderStatusComponent },
      { path: "invoice", component: OrderInvoiceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
