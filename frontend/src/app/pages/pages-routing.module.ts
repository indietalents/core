import { InfoComponent } from './profile/info/info.component';
import { PostsComponent } from './profile/posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'profile',
    component: ProfileComponent,
      children: [{
        path: '',
        redirectTo: 'info',
        pathMatch: 'full',
      }, {
        path: 'info',
        component: InfoComponent,
      }, {
        path: 'posts',
        component: PostsComponent,
      }]
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
