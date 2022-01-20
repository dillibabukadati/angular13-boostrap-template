import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [SignUpComponent,],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ]
})
export class AuthModule {
}
