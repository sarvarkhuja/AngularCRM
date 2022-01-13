import { CtaComponent } from "./cta/cta.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductsRoutes } from "./products.routing";
import { ComponentsCarouselModule } from "src/app/components/carousel/components.carousel.module";
import { PagesContainersModule } from "src/app/containers/pages/pages.containers.module";
import { UiModalsContainersModule } from "src/app/containers/ui/modals/ui.modals.containers.module";
import { ModalFormComponent } from "./modal-form/modal-form.component";
import { OrderContainerComponent } from "./order-container/order-container.component";
import { FormValidationsContainersModule } from "src/app/containers/form-validations/form.validations.containers.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { PhoneMaskDirective } from "src/app/shared/pipes/phone-mask/phone-mask.directive";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LayoutContainersModule,
    ProductsRoutes,
    ComponentsCarouselModule,
    PagesContainersModule,
    UiModalsContainersModule,
    FormValidationsContainersModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  declarations: [
    ProductsComponent,
    CtaComponent,
    ModalFormComponent,
    OrderContainerComponent,
  ],
})
export class ProductsModule {}
