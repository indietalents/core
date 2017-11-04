import { ProfileRoutingModule } from './profile-routing.module';
import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { InfoComponent } from './info/info.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule,
    ThemeModule
  ],
  declarations: [ProfileComponent,
    InfoComponent,
    PostsComponent
]
})
export class ProfileModule { }