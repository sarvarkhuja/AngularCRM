import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { EndpointSettings } from "src/core/configs/endpoint.settings";
import { UrlSettings } from "src/core/configs/url.setting";
import { ServiceHelper } from "src/core/helpers/service.helper";

@Injectable()
export class OrdersListService {
  constructor() {}

  public getOrderList(): Observable<any> {
    return ServiceHelper.get(
      UrlSettings.BASE_URL + EndpointSettings.GET_ORDER_LIST
    );
  }
  public getKanbanOrderList(): Observable<any> {
    return ServiceHelper.get(
      UrlSettings.BASE_URL + EndpointSettings.GET_KANBAN_ORDER_LIST
    );
  }
}
