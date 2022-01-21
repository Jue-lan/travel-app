import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './header/homepage/homepage.component';

import { CitiesComponent } from './cities-module/cities/cities.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
