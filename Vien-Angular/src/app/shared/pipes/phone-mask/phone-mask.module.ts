import { NgModule } from "@angular/core";
import { PhoneMaskDirective } from "./phone-mask.directive";

@NgModule({
  exports: [PhoneMaskDirective],
  declarations: [PhoneMaskDirective],
})
export class PhoneMaskModule {}
