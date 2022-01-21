import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './header/homepage/homepage.component';

import { InfoModuleModule } from './info-module/info-module.module';
import { HeaderModule } from './header/header.module';
import { CitiesModuleModule } from './cities-module/cities-module.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, InfoModuleModule, HeaderModule, CitiesModuleModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
