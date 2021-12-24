import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Modules imported by CoreModule
 */
const IMPORTS = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,

  // TODO: Depricated after Angular 10
  // TranslateModule.forRoot({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: HttpLoaderFactory,
  //     deps: [HttpClient]
  //   }
  // }),

  // TODO: TREAT
  // MomentModule.forRoot({
  //   relativeTimeThresholdOptions: {
  //     m: 59
  //   }
  // }),

];

/**
 * Module declarations(components)
 */
const DECLARATIONS = [];

/**
 *  Module exporting modules
 */
const EXPORTS = [CommonModule, BrowserModule, BrowserAnimationsModule];

@NgModule({
  imports: [...IMPORTS],
  declarations: [...DECLARATIONS],
  exports: [...EXPORTS],
  providers: [
  ]
})
export class CoreModule { }
