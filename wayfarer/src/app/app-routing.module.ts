import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CitiesComponent } from './cities-module/cities/cities.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { InfoWindowComponent } from './info-window/info-window.component';

const routes: Routes = [
  {
    //   /cities/
    path: 'cities',
    component: CitiesComponent,
  },
  {
    //  /cities/:id
    path: 'cities/:id',
    component: InfoWindowComponent,
  },
  {
    path: 'post',
    component: InfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
