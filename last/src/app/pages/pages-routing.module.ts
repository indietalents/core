import { PostsComponent } from './../profile/posts/posts.component';
import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,

  children: [{
    path: '',
    loadChildren: './profile/profile.module#ProfileModule',
    //component: ProfileComponent,
    // children: [{
    //   path: 'posts',
    //   component: PostsComponent
    // }, {
    //   path: '',
    //   redirectTo: 'posts',
    //   pathMatch: 'full',
    // }],
  }],
}];



  // },  {
  //   path: 'ui-features',
  //   loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  // }, {
  //   path: 'components',
  //   loadChildren: './components/components.module#ComponentsModule',
  // }, {
  //   path: 'maps',
  //   loadChildren: './maps/maps.module#MapsModule',
  // }, {
  //   path: 'charts',
  //   loadChildren: './charts/charts.module#ChartsModule',
  // }, {
  //   path: 'editors',
  //   loadChildren: './editors/editors.module#EditorsModule',
  // }, {
  //   path: 'forms',
  //   loadChildren: './forms/forms.module#FormsModule',
  // }, {
  //   path: 'tables',
  //   loadChildren: './tables/tables.module#TablesModule',
  // }, {
  // path: '',
  //   redirectTo: '',
  //     pathMatch: 'full',
  // }],
// }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}