import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BlankPageComponent } from "./blank-page/blank-page.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "orders" },
      {
        path: "orders",
        loadChildren: () =>
          import("./orders-list/orders-list.module").then(
            (m) => m.OrdersListModule
          ),
      },
      { path: "blank-page", component: BlankPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
