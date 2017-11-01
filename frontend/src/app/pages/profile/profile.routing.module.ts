import { ProfileResolver } from './profile-resolver.service';
import { MainContentComponent } from './content-block/main-content/main-content.component';
import { ProfileComponent } from './profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const contentBlockRoutes: Routes = [
    {
      path: 'profile',  // /:id
      component: ProfileComponent,
      resolve: {
        user: ProfileResolver
      },
      children: [
        {
          path: '',
          component: MainContentComponent
          //loadChildren: 'app/pages/profile/content-block/posts/posts.module#PostsModule',
        },
        {
            path: 'posts',
            //component: PostsComponent
            loadChildren: 'app/pages/profile/content-block/posts/posts.module#PostsModule',
        },
        {
            path: 'superposts',
            loadChildren: 'app/pages/profile/content-block/super-posts/super-posts.module#SuperPostsModule',
        },
        
      ],
    },
    { path: '', redirectTo: 'profile', pathMatch: 'full' },  // /:id
    { path: '**', redirectTo: 'profile' },   // /:id
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(contentBlockRoutes)],
    exports: [RouterModule],
    providers: [ProfileResolver]
  })
  export class ProfileRoutingModule {}