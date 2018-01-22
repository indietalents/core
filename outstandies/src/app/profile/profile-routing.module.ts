import { EmptyComponent } from './../shared/components/empty/empty.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      component: ProfileComponent,
      children: [
        {
          path: '',
          component: EmptyComponent
        },
        {
          path: '',
          redirectTo: 'posts',
          pathMatch: 'full',
        }, 
        {
          path: 'posts',
          loadChildren: '../profile/posts/posts.module#PostsModule'
        },
        {
          path: 'superposts',
          loadChildren: '../profile/superposts/superposts.module#SuperpostsModule'
        }
    ],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
 export class ProfileRoutingModule {}