import { Observable, throwError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaderResponse,
  HttpSentEvent,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';


/**
 *
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(
    public router: Router
  ) {}

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
    req = req.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          //this.auth.logout();
          this.router.navigate(['/auth/sign-in']);
        }
        if (err.error) {
          const errors = this.formatErrors(err);
         // this.toastr.error(errors[0]);
          return throwError(errors);
        } else {
          // this.toastr.error('Произошла неожиданная ошибка.', 'Ошибка', {
          //   closeButton: true,
          //   timeOut: 5000,
          //   onActivateTick: true,
          // });
          return throwError('Произошла неожиданная ошибка.');
        }
      })
    );
  }

  /**
   *
   */
  private formatErrors(err): string[] {
    if (typeof err.error === 'string') {
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
    return ['Something went wrong'];
  }
}
