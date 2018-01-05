import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostsComponent],
  exports: [PostsComponent]
})
export class PostsModule { }