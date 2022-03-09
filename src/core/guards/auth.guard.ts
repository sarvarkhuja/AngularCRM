import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { take, map, tap } from "rxjs/operators";
import { AuthService } from "src/app/shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    /* next: ActivatedRouteSnapshot, state: RouterStateSnapshot */
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => !!isLoggedIn),
      tap((authenticated) => {
        console.log(authenticated);

        if (!authenticated) {
          this.router.navigate(["/"]);
          return false;
        }
        return true;
      })
    );
  }
}
