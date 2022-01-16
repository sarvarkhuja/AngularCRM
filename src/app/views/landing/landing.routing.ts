import { LandingComponent } from "./landing.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: LandingComponent }];

export const LandingRoutes = RouterModule.forChild(routes);
