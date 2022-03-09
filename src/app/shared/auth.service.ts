import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable, from, BehaviorSubject } from "rxjs";
import { EndpointSettings } from "src/core/configs/endpoint.settings";
import { UrlSettings } from "src/core/configs/url.setting";
import { LoginModel } from "src/core/models/auth/auth-model";

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private afAuth: AngularFireAuth, public http: HttpClient) {}

  public loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: LoginModel): Observable<Response> {
    return this.http.post<Response>(
      UrlSettings.BASE_URL + EndpointSettings.SIGN_IN,
      {
        userName: user.userName,
        password: user.password,
      }
    );
  }

  hasToken(): boolean {
    return !!sessionStorage.getItem("token");
  }

  signIn(credentials: ISignInCredentials): Observable<auth.UserCredential> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
    );
  }

  signOut() {
    return from(this.afAuth.auth.signOut());
  }

  register(credentials: ICreateCredentials) {
    return from(
      this.afAuth.auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          this.afAuth.auth.currentUser.updateProfile({
            displayName: credentials.displayName,
          });
          this.afAuth.auth.updateCurrentUser(this.afAuth.auth.currentUser);
        })
    );
  }

  sendPasswordEmail(email) {
    return from(this.afAuth.auth.sendPasswordResetEmail(email));
  }

  resetPassword(credentials: IPasswordReset) {
    return from(
      this.afAuth.auth.confirmPasswordReset(
        credentials.code,
        credentials.newPassword
      )
    );
  }

  get user(): firebase.User {
    return this.afAuth.auth.currentUser;
  }
}
