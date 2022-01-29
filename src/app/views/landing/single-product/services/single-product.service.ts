import { Injectable } from "@angular/core";
import { User } from "firebase";
import { Observable } from "rxjs";
import { EndpointSettings } from "src/core/configs/endpoint.settings";
import { UrlSettings } from "src/core/configs/url.setting";
import { ServiceHelper } from "src/core/helpers/service.helper";
import { AddProductModel } from "../models/add-product.model";

@Injectable({
  providedIn: "root",
})
export class SingleProductService {
  constructor() {}
  getAllProductList() {
    return ServiceHelper.get(UrlSettings.BASE_URL + `Web/GetProducts`);
  }

  addSingleOrder(data: AddProductModel): Observable<AddProductModel> {
    return ServiceHelper.post<AddProductModel>(
      UrlSettings.BASE_URL + EndpointSettings.ADD_ORDER,
      data
    );
  }
}
