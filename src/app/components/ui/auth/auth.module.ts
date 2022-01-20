import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RouterModule} from "@angular/router";
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [SignUpComponent, SignInComponent,],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule {
}
