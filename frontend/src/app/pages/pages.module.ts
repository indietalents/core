import { EmptyComponent } from '../shared/components/empty/empty.component';
import { PostsComponent } from '../profile/posts/posts.component';
//import { ContentBlockRoutingModule } from './profile/content-block/content-block-routing.module';
import { ProfileModule } from '../profile/profile.module';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  PagesComponent,
  //PostsComponent,
  EmptyComponent
];

@NgModule({
  imports: [
    //ProfileModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  //exports: [EmptyComponent]
})
export class PagesModule {
}
