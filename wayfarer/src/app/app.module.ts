import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './header/homepage/homepage.component';

import { HeaderModule } from './header/header.module';
import { CitiesModuleModule } from './cities-module/cities-module.module';
import { InfoWindowComponent } from './info-window/info-window.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomepageComponent, InfoWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CitiesModuleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
