import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralInterceptor} from "./general.interceptor";

@NgModule({
  declarations: [],
  providers: [GeneralInterceptor],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
