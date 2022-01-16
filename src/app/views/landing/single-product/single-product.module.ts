import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleProductComponent } from "./single-product.component";
import { SingleProductRoutes } from "./single-product.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductDescriptionComponent } from "./components/product-description/product-description.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductModalComponent } from "./components/product-modal/product-modal.component";
import { ProductOrderFormComponent } from "./components/product-order-form/product-order-form.component";
import { ProductSliderComponent } from "./components/product-slider/product-slider.component";

@NgModule({
  imports: [CommonModule, SingleProductRoutes, SharedModule],
  declarations: [
    SingleProductComponent,
    ProductDescriptionComponent,
    ProductDetailsComponent,
    ProductModalComponent,
    ProductOrderFormComponent,
    ProductSliderComponent,
  ],
})
export class SingleProductModule {}
