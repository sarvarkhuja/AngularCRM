import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { ErrorComponent } from "./error/error.component";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from "@angular/fire/auth-guard";
import { environment } from "./../../environments/environment";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["/user"]);
const redirectLoggedInToItems = () => redirectLoggedInTo(["/app"]);

let routes: Routes = [
  {
    path: "",
    component: ViewsComponent,
    pathMatch: "full",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./landing/landing.module").then((m) => m.LandingModule),
      },
    ],
  },
  {
    path: "app",
    loadChildren: () => import("./app/app.module").then((m) => m.AppModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then((m) => m.UserModule),
    data: { authGuardPipe: redirectLoggedInToItems },
  },
  {
    path: "item",
    loadChildren: () =>
      import("./landing/single-product/single-product.module").then(
        (m) => m.SingleProductModule
      ),
  },
  { path: "error", component: ErrorComponent },
  { path: "**", redirectTo: "/error" },
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: "",
      component: ViewsComponent,
      pathMatch: "full",
    },
    {
      path: "app",
      loadChildren: () => import("./app/app.module").then((m) => m.AppModule),
    },
    {
      path: "user",
      loadChildren: () =>
        import("./user/user.module").then((m) => m.UserModule),
    },
    { path: "error", component: ErrorComponent },
    { path: "**", redirectTo: "/error" },
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
