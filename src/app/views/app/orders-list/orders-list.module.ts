import { SingleOrderComponent } from "./components/single-order/single-order.component";
import { OrderListIndexComponent } from "./components/order-list-index/order-list-index.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrdersListComponent } from "./orders-list.component";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { SharedModule } from "src/app/shared/shared.module";
import { OrdersListRoutes } from "./orders-list.routing";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { OrdersListService } from "./services/orders-list.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "src/core/interceptors/token.interceptor";

import {
  NumericTextBoxAllModule,
  TextBoxAllModule,
} from "@syncfusion/ej2-angular-inputs";

import { DialogModule } from "@syncfusion/ej2-angular-popups";

import { DropDownListAllModule } from "@syncfusion/ej2-angular-dropdowns";

import { CheckBoxAllModule } from "@syncfusion/ej2-angular-buttons";

import { KanbanAllModule } from "@syncfusion/ej2-angular-kanban";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutContainersModule,
    OrdersListRoutes,
    NgxDatatableModule,
    KanbanAllModule,
    NumericTextBoxAllModule,
    TextBoxAllModule,
    DialogModule,
    DropDownListAllModule,
    CheckBoxAllModule,
  ],
  providers: [
    OrdersListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],

  declarations: [
    OrdersListComponent,
    SingleOrderComponent,
    OrderListIndexComponent,
  ],
})
export class OrdersListModule {}
