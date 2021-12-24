import { OrderInvoiceComponent } from './order-invoice/order-invoice.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderStatusComponent } from "./order-status/order-status.component";
import { NgModule } from "@angular/core";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { ContentComponent } from "./content/content.component";
import { DefaultComponent } from "./default/default.component";
import { EcommerceComponent } from "./ecommerce/ecommerce.component";
import { DashboardsComponent } from "./dashboards.component";
import { DashboardsRoutingModule } from "./dashboards.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { DashboardsContainersModule } from "src/app/containers/dashboards/dashboards.containers.module";
import { ComponentsCardsModule } from "src/app/components/cards/components.cards.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { HotkeyModule } from 'angular2-hotkeys';
import { RatingModule, PaginationModule, TabsModule, ModalModule, BsDropdownModule, AccordionModule } from 'ngx-bootstrap';
import { ContextMenuModule } from 'ngx-contextmenu';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { ProductRoutingModule } from '../pages/product/product.routing';

@NgModule({
  declarations: [
    AnalyticsComponent,
    OrderStatusComponent,
    ContentComponent,
    DefaultComponent,
    EcommerceComponent,
    DashboardsComponent,
    OrdersComponent,
    OrderInvoiceComponent,
  ],
  imports: [
    SharedModule,
    LayoutContainersModule,
    DashboardsContainersModule,
    DashboardsRoutingModule,
    ComponentsCardsModule,

    ProductRoutingModule,
    ComponentsCarouselModule,
    LayoutContainersModule,
    PagesContainersModule,
    ComponentsChartModule,
    RatingModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    })
  ],
})
export class DashboardsModule {}
