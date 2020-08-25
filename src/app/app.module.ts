import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminModule} from "./admin/admin.module";
import {AuthModule} from './core/auth/auth.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthGuardService } from './core/services/guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireAuthModule,
    NgbModule,
    AdminModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
