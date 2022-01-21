import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './header/homepage/homepage.component';
import { PostComponent } from './info-module/post/post.component';

const routes: Routes = [
  {
    path: 'cities',
    component: PostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
