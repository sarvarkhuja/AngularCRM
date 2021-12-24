import { UrlSettings } from "./../../core/configs/url.setting";
import { Injectable } from "@angular/core";
import { User } from "firebase";
import { Observable } from "rxjs";
import { ServiceHelper } from "src/app/core/helpers/service.helper";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { get } from "http";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private httpc:HttpClient) {}

  userProfilesGet(): Observable<User> {
    let clientheaders = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    return this.httpc.get<User>(UrlSettings.BASE_URL + `Web/GetProducts`, {headers:clientheaders});
  }
}
