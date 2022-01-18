import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideMenuBarComponent} from './components/side-menu-bar/side-menu-bar.component';
import {HeaderComponent} from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SideBarMenuItemComponent} from './components/side-bar-menu-item/side-bar-menu-item.component';
import {SideBarMenuDeviderComponent} from './components/side-bar-menu-devider/side-bar-menu-devider.component';
import {IconsModule} from "./shared/icons.module";
import {HttpClientModule} from "@angular/common/http";
import { SideBarMenuGroupComponent } from './components/side-bar-menu-group/side-bar-menu-group.component';
import { SideBarMenuCollapsableComponent } from './components/side-bar-menu-collapsable/side-bar-menu-collapsable.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuBarComponent,
    HeaderComponent,
    SideBarMenuItemComponent,
    SideBarMenuDeviderComponent,
    SideBarMenuGroupComponent,
    SideBarMenuCollapsableComponent
  ],
  imports: [
    IconsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
