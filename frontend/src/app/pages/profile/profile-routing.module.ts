import { PostsComponent } from './posts/posts.component';
import { InfoComponent } from './info/info.component';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: ProfileComponent,
    // children: [{
    //   path: '',
    //   redirectTo: 'profile/info',
    //   pathMatch: 'full',
    // }, {
    //   path: 'profile/info',
    //   component: InfoComponent,
    // }, {
    //   path: 'profile/posts',
    //   component: PostsComponent,
    // }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
