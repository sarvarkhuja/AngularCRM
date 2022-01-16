import { SingleProductComponent } from "./single-product.component";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

const routes: Routes = [
  {
    path: "",
    component: SingleProductComponent,
    children: [
      {
        path: "",
        component: ProductDetailsComponent,
      },
    ],
  },
];

export const SingleProductRoutes = RouterModule.forChild(routes);
