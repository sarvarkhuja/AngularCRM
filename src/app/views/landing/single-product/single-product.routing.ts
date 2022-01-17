import { SingleProductComponent } from "./single-product.component";
import { Routes, RouterModule } from "@angular/router";
import { ProductIndexComponent } from "./components/product-index/product-index.component";

const routes: Routes = [
  {
    path: "",
    component: SingleProductComponent,
    children: [
      {
        path: "",
        component: ProductIndexComponent,
        pathMatch: "full",
      },
    ],
  },
];

export const SingleProductRoutes = RouterModule.forChild(routes);
