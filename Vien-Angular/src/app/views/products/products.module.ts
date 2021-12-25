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

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LayoutContainersModule,
    ProductsRoutes,
    ComponentsCarouselModule,
    PagesContainersModule,
    UiModalsContainersModule,
  ],
  declarations: [ProductsComponent, CtaComponent],
})
export class ProductsModule {}
