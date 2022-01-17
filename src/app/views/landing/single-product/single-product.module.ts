import { PhoneMaskModule } from "./../../../shared/directives/phone-mask.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleProductComponent } from "./single-product.component";
import { SingleProductRoutes } from "./single-product.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductDescriptionComponent } from "./components/product-description/product-description.component";
import { ProductModalComponent } from "./components/product-modal/product-modal.component";
import { ProductOrderFormComponent } from "./components/product-order-form/product-order-form.component";
import { ProductSliderComponent } from "./components/product-slider/product-slider.component";
import { ProductIndexComponent } from "./components/product-index/product-index.component";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { ComponentsCarouselModule } from "src/app/components/carousel/components.carousel.module";
import { FormValidationsContainersModule } from "src/app/containers/form-validations/form.validations.containers.module";
import { PagesContainersModule } from "src/app/containers/pages/pages.containers.module";
import { UiModalsContainersModule } from "src/app/containers/ui/modals/ui.modals.containers.module";
import { ProductTabsComponent } from "./components/product-tabs/product-tabs.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { RatingModule, AccordionModule, BsDropdownModule } from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    SingleProductRoutes,
    SharedModule,
    LayoutContainersModule,
    ComponentsCarouselModule,
    PagesContainersModule,
    UiModalsContainersModule,
    FormValidationsContainersModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    PhoneMaskModule,
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  declarations: [
    SingleProductComponent,
    ProductDescriptionComponent,
    ProductIndexComponent,
    ProductModalComponent,
    ProductOrderFormComponent,
    ProductSliderComponent,
    ProductTabsComponent,
  ],
})
export class SingleProductModule {}
