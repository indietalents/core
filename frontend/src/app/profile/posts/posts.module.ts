import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PostsComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [PostsComponent]
})
export class PostsModule { }