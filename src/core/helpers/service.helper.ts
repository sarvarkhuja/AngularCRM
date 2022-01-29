import { InjectorHelper } from "./injector.helper";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
//import { AuthService } from '../services/auth/auth.service';
import { FileService } from "../services/file/file.service";
//import { ToastrService } from 'ngx-toastr';

/**
 *
 */
export interface KeyValuePair {
  /**
   *
   */
  key: string;

  /**
   *
   */
  value: string;
}

export class ServiceHelper {
  /**
   * Static HTTP client
   */
  static get http(): HttpClient {
    return InjectorHelper.injector.get(HttpClient);
  }

  /**
   *
   */
  // static get auth(): AuthService {
  //   return InjectorHelper.injector.get(AuthService);
  // }

  /**
   *
   */
  static get file(): FileService {
    return InjectorHelper.injector.get(FileService);
  }

  // /**
  //  *
  //  */
  // static get toastr(): ToastrService {
  //   return InjectorHelper.injector.get(ToastrService);
  // }

  /**
   * TODO: Depricated
   */
  // static get translate(): TranslateService {
  //   return InjectorHelper.injector.get(TranslateService);
  // }

  /**
   *
   */
  static get<TResponse>(
    url: string,
    keyMap?: KeyValuePair[]
  ): Observable<TResponse> {
    const params = new HttpParams();
    if (keyMap) {
      keyMap.forEach((value) => params.append(value.key, value.value));
    }
    return this.http.get<TResponse>(url, { params });
  }

  /**
   *
   */
  static byId<TResponse>(url: string): Observable<TResponse> {
    return this.http.get<TResponse>(url);
  }

  /**
   * Post request
   */
  static post<TResponse>(url: string, model: any): Observable<TResponse> {
    return this.http.post<TResponse>(url, model);
  }

  /**
   * Put request
   */
  static put<TResponse>(url: string, model: any): Observable<TResponse> {
    return this.http.put<TResponse>(url, model);
  }

  /**
   *
   */
  static delete<TResponse>(url: string): Observable<TResponse> {
    return this.http.delete<TResponse>(url);
  }
}
