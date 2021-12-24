import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceHelper } from '../helpers/service.helper';
import { UrlHelper } from '../helpers/url.helper';
import { LoginModel } from '../models/auth/auth-model';
import { User } from '../models/auth/user.model';

const baseUrl = UrlHelper.settings.apiUrl;

export class UserService {
  /**
   *
   */
  static me(): Observable<any> {
    return ServiceHelper.get<any>(
      baseUrl + `users/me`
    );
  }

  /**
   *
   */
   static register(user: LoginModel): Observable<any> {
    return ServiceHelper.post<any>(
      baseUrl + `users`, user
    );
  }

  /**
   *
   */
   static userProfilesUpdate(user: User): Observable<any> {
    return ServiceHelper.put<any>(
      baseUrl + `userprofiles`, user
    );
  }

  /**
   *
   */
   static userProfilesGet(): Observable<User> {
    return ServiceHelper.get<User>(
      baseUrl + `userprofiles`
    );
  }
}
