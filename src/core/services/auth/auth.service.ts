// import { Injectable } from '@angular/core';
// import { HttpHeaders, HttpClient } from '@angular/common/http';
// import jwt_decode from 'jwt-decode';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { UrlHelper } from '../../helpers/url.helper';
// import { LoginModel } from '../../models/auth/auth-model';
// import { User } from '../../models/auth/user.model';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "firebase";
import { BehaviorSubject, Observable } from "rxjs";
import { EndpointSettings } from "src/core/configs/endpoint.settings";
import { LoginModel } from "src/core/models/auth/auth-model";

// export const TOKEN_NAME = 'authToken';
// export const REFRESH_TOKEN_NAME = 'rf_token';

// /**
//  *
//  */
// @Injectable({ providedIn: 'root' })
// export class AuthService {
//   /**
//    *
//    */
//   public token: string;

//   /**
//    *
//    */
//   public refreshToken: string;

//   /**
//    *
//    */
//   private baseUrl: string;

//   /**
//    *
//    */
//   private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

//   /**
//    *
//    */
//   constructor(private http: HttpClient) {
//     this.baseUrl = `${UrlHelper.settings.apiUrl}auth`;
//   }

//   /**
//    * Function returns token from local storage
//    */
//   getToken(): string {
//     if (!this.token) {
//       this.token = localStorage.getItem(TOKEN_NAME);
//     }
//     return this.token;
//   }

//   /**
//    * Function returns refresh token from local storage
//    */
//   getRefreshToken(): string {
//     if (!this.refreshToken) {
//       this.refreshToken = localStorage.getItem(REFRESH_TOKEN_NAME);
//     }
//     return this.refreshToken;
//   }

//   /**
//    * Returns permissions by getting from local storage
//    */
//   getPermissions(): string[] {
//     const data = localStorage.getItem('data');
//     if (data) {
//       const result = atob(data);
//       return JSON.parse(result).permissions;
//     }
//     return [];
//   }

//   /**
//    * Saves permissions data to local storage
//    */
//   setPermsExp(data): void {
//     if (data) {
//       const date = new Date();
//       date.setSeconds(date.getUTCSeconds() + data.expires_in);
//       data.expires_in = date.valueOf();
//       const perms = btoa(JSON.stringify(data));
//       localStorage.setItem('data', perms);
//     }
//   }

//   /**
//    * Saves UIElements(menu permissions, button permissions) to local storage
//    */
//   setMenuPermissions(uiElements): void {
//     if (uiElements && uiElements.length) {
//       const elements = btoa(JSON.stringify(uiElements));
//       localStorage.setItem('permissions', elements);
//     }
//   }

//   /**
//    * Returns UIElements by getting from local storage
//    */
//   getMenuPermissions(): string[] {
//     const data = localStorage.getItem('permissions');
//     if (data) {
//       const result = atob(data);
//       const elements = JSON.parse(result).split(',');
//       elements.pop();
//       return elements;
//     }
//     return [];
//   }

//   /**
//    * Stores permissions to local storage
//    */
//   setToken(token): void {
//     localStorage.setItem(TOKEN_NAME, token);
//   }

//   setRefreshToken(token): void {
//     localStorage.setItem(REFRESH_TOKEN_NAME, token);
//   }

//   removeToken(): void {
//     localStorage.removeItem(TOKEN_NAME);
//     localStorage.removeItem(REFRESH_TOKEN_NAME);
//     localStorage.removeItem('data');
//     localStorage.removeItem('permissions');
//   }

//   getTokenExpirationDate(): Date {
//     const data = localStorage.getItem('data');
//     const exp = JSON.parse(atob(data)).expires_in;
//     if (!exp) {
//       return null;
//     }
//     const date = new Date(exp);
//     return date;
//   }

//   isTokenExpired(token?: string): boolean {
//     if (!token) {
//       token = this.getToken();
//     }
//     if (!token) {
//       return true;
//     }

//     const date = this.getTokenExpirationDate();
//     if (!date) {
//       return false;
//     }
//     return !(date.valueOf() > new Date().valueOf());
//   }

//   // getUserName(): string {
//   //   let decoded;
//   //   if (this.getToken()) {
//   //     decoded = jwt_decode(this.getToken());
//   //     return decoded.UserName ? decoded.UserName : decoded.sub;
//   //   }
//   //   return null;
//   // }

//   isAdmin(): boolean {
//     let decoded;
//     if (this.getToken()) {
//       decoded = jwt_decode(this.getToken());
//       return decoded.SysAdmin === 'True' ? true : false;
//     }
//     return null;
//   }

//   isActive = (): boolean => {
//     let decoded;
//     if (this.getToken()) {
//       decoded = jwt_decode(this.getToken());
//       return decoded.Active === 'True' ? true : false;
//     }
//     return false;
//   }

//   login(model: LoginModel): Observable<boolean> {
//     return this.http
//       .post(`${this.baseUrl}/token`, model, {
//         headers: this.headers,
//       })
//       .pipe(
//         map(
//           (resp) => {
//             const res: any = resp;
//             console.log(res);
//             if (res) {
//               this.token = res.authToken;
//               this.setToken(this.token);

//               // TODO: Remove comments
//               // this.refreshToken = res.result.refresh_token;
//               // this.setRefreshToken(this.refreshToken);
//               // this.setPermsExp(res.result);
//               // this.setMenuPermissions(res.result.permission);
//               return true;
//             }
//             return false;
//           },
//           (error) => {
//             console.log(error);
//           }
//         )
//       );
//   }

//   // tslint:disable-next-line:typedef
//   register(user: User) {
//     return this.http.post(`${this.baseUrl}/register`, user, {
//       headers: this.headers,
//     });
//   }

//   logout(): void {
//     this.token = null;
//     this.refreshToken = null;
//     this.removeToken();
//   }
// }
@Injectable()
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(this.getAuthToken());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(public http: HttpClient) {}

  login(user: LoginModel): Observable<Response> {
    return this.http.post<Response>(EndpointSettings.SIGN_IN, {
      userName: user.userName,
      password: user.password,
    });
  }

  getAuthToken(): boolean {
    return !!sessionStorage.getItem("token");
  }
  getAuthTokenValue(): string {
    return sessionStorage.getItem("token");
  }
}
