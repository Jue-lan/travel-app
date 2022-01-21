import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './info-module/info/info.component';
import { PostComponent } from './info-module/post/post.component';
import { CitiesComponent } from './cities-module/cities/cities.component'; 

const routes: Routes = [
  {
    path: 'cities/:id',
    component: CitiesComponent,
  },
  {
    path: 'info/:id',
    component: InfoComponent,
  },
    {
    path: 'post/:id',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
