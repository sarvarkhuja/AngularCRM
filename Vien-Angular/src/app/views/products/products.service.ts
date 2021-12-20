import { UrlSettings } from "./../../core/configs/url.setting";
import { Injectable } from "@angular/core";
import { User } from "firebase";
import { Observable } from "rxjs";
import { ServiceHelper } from "src/app/core/helpers/service.helper";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor() {}

  userProfilesGet(): Observable<User> {
    return ServiceHelper.get<User>(UrlSettings.BASE_URL + `Web/GetProducts`);
  }
}
  