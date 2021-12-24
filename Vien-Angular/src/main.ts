import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { UrlHelper } from "./app/core/helpers/url.helper";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

const color =
  (environment.isMultiColorActive || environment.isDarkSwitchActive) &&
  localStorage.getItem(environment.themeColorStorageKey)
    ? localStorage.getItem(environment.themeColorStorageKey)
    : environment.defaultColor;

import("./assets/css/sass/themes/vien." + color + ".scss")
  .then((x) => {
    localStorage.setItem(environment.themeColorStorageKey, color);
    UrlHelper.load()
      .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
      .catch((err) => console.error(err));
  })
  .catch(() => {
    localStorage.removeItem(environment.themeColorStorageKey);
    window.location.reload();
  });
