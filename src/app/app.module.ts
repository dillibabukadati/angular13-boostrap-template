import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsModule} from "./shared/icons.module";
import {HttpClientModule} from "@angular/common/http";
import {SideNavBarModule} from "./components/ui/side-nav-bar/side-nav-bar.module";
import {TopHeaderModule} from "./components/ui/top-header/top-header.module";
import { LayoutComponent } from './components/ui/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    IconsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SideNavBarModule,
    TopHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
