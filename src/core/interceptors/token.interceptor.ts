import { Observable, throwError, of } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaderResponse,
  HttpSentEvent,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { AuthService } from "../services/auth/auth.service";

/**
 *
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(public router: Router, private authService: AuthService) {}

  /**
   *
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    const token = this.authService.getAuthTokenValue();
    console.log(token);

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          //this.auth.logout();
          this.router.navigate(["/auth/sign-in"]);
        }
        if (err.error) {
          const errors = this.formatErrors(err);
          // this.toastr.error(errors[0]);
          return throwError(errors);
        } else {
          return throwError("Произошла неожиданная ошибка.");
        }
      })
    );
  }

  /**
   *
   */
  private formatErrors(err): string[] {
    if (typeof err.error === "string") {
      return [err.error];
    }
    if (err.error.error) {
      return [err.error.error.message];
    }
    if (err.error) {
      return [err.error.message];
    }
    if (err.message) {
      return [err.message];
    }
    return ["Something went wrong"];
  }
}
