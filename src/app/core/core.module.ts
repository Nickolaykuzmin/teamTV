import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralInterceptor} from "./general.interceptor";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpService} from "./services/http.service";
import {ToastrModule} from "ngx-toastr";
import {AlertService} from "./services/alert.service";
import {LastVisitedService} from "./services/last-visited.service";

@NgModule({
  declarations: [],
  providers: [
    GeneralInterceptor,
    LastVisitedService,
    AuthService,
    AlertService,
    HttpService,
    UserService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class CoreModule {
}
