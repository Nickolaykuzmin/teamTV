import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralInterceptor} from "./general.interceptor";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  providers: [
    GeneralInterceptor,
    AuthService,
    UserService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {
}
