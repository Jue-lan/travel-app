import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [InfoComponent, PostComponent],
  imports: [CommonModule],
  exports: [InfoComponent, PostComponent],
})
export class InfoModuleModule {}
