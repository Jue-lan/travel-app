import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './header/homepage/homepage.component';
import { PostComponent } from './info-module/post/post.component';
import { CitiesComponent } from './cities-module/cities/cities.component';
import { InfoComponent } from './info-module/info/info.component';
import { CitiesModuleModule } from './cities-module/cities-module.module';
import { HeaderModule } from './header/header.module';
import { InfoModuleModule } from './info-module/info-module.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CitiesModuleModule,
    HeaderModule,
    InfoModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
