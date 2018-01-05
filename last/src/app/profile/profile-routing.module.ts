
import { PostsComponent } from '../profile/posts/posts.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: ProfileComponent,
    children: [{
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
      },{
      path: 'posts',
      component: PostsComponent,
    }],
  }];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
 export class ProfileRoutingModule {}