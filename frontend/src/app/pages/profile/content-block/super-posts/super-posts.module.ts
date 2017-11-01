import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperPostsComponent } from './super-posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SuperPostsComponent],
  exports: [SuperPostsComponent]
})
export class SuperPostsModule { }