import { EmptyComponent } from './../shared/components/empty/empty.component';
import { SuperpostsComponent } from './superposts/superposts.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { PostsComponent } from './posts/posts.component';
import { ThemeModule } from './../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';

@NgModule({
  imports: [
    ProfileRoutingModule,
    ThemeModule,
    CommonModule,
    SuiCheckboxModule
  ],
  declarations: [ProfileComponent],
  //exports: [EmptyComponent]
})
export class ProfileModule {



 }