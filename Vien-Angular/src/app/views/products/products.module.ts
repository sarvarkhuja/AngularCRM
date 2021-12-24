import { CtaComponent } from './cta/cta.component';
import { ComponentsModule } from './../app/ui/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutes } from './products.routing';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutContainersModule,
    SharedModule,
    ProductsRoutes,
    ComponentsCarouselModule,
    PagesContainersModule,
  ],
  declarations: [ProductsComponent, CtaComponent]
})
export class ProductsModule { }
