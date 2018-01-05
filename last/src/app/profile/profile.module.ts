import { ProfileRoutingModule } from './profile-routing.module';
import { PostsComponent } from './posts/posts.component';
import { ThemeModule } from './../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    ProfileRoutingModule,
    ThemeModule,
    CommonModule
  ],
  declarations: [ProfileComponent, PostsComponent]
})
export class ProfileModule { }