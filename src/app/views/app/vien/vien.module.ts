import { NgModule } from "@angular/core";
import { StartComponent } from "./start/start.component";
import { VienComponent } from "./vien.component";
import { VienRoutingModule } from "./vien.routing";
import { SharedModule } from "src/app/shared/shared.module";
import { LayoutContainersModule } from "src/app/containers/layout/layout.containers.module";
import { FormsModule } from "@angular/forms";
import { GridModule } from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

@NgModule({
  imports: [
    SharedModule,
    LayoutContainersModule,
    VienRoutingModule,
    FormsModule,
    GridModule,
    ButtonsModule,
    InputsModule,
  ],
  declarations: [VienComponent, StartComponent],
})
export class VienModule {}
