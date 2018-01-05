import { SuperPostsComponent } from './content-block/super-posts/super-posts.component';
import { PostsComponent } from './content-block/posts/posts.component';
import { ProfileResolver } from './profile-resolver.service';
import { MainContentComponent } from './content-block/main-content/main-content.component';
import { ProfileComponent } from './profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const contentBlockRoutes: Routes = [
    {
      path: '',
      component: ProfileComponent,
      children: [{
        path: 'posts',
        component: PostsComponent
      }, {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      }],

    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(contentBlockRoutes)],
    exports: [RouterModule],
    //providers: [ProfileResolver]
  })
  export class ProfileRoutingModule {}