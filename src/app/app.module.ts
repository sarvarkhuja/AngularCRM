import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { ViewsModule } from "./views/views.module";
import { TranslateModule } from "@ngx-translate/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { LayoutContainersModule } from "./containers/layout/layout.containers.module";
import { InjectorHelper } from "src/core/helpers/injector.helper";

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public injector: Injector) {
    //
    InjectorHelper.injector = injector;
  }
}
