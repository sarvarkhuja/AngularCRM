import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing.component";
import { LandingRoutes } from "./landing.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [CommonModule, LandingRoutes, SharedModule, TranslateModule],
  declarations: [LandingComponent],
})
export class LandingModule {}
