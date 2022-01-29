import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

/**
 *
 */
@Injectable({ providedIn: "root" })
export class UrlHelper {
  /**
   *
   */
  static settings: any;

  /**
   *
   */
  // tslint:disable-next-line:typedef
  static load() {
    const jsonFile = `assets/config/config${
      environment.production ? ".prod" : ""
    }.json`;
    return new Promise<void>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.overrideMimeType("application/json");
      xhr.open("GET", jsonFile, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            this.settings = JSON.parse(xhr.responseText);
            resolve();
          } else {
            reject(`Could not load file '${jsonFile}': ${xhr.status}`);
          }
        }
      };
      xhr.send(null);
    });
  }
}
