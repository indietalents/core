import { PostsComponent } from './content-block/posts/posts.component';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule } from './profile.routing.module';
import { ThemeModule } from './../../@theme/theme.module';
import { HeaderBlockModule } from './header-block/header-block.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    ProfileRoutingModule, 
    CommonModule,
    HeaderBlockModule,
    ThemeModule
  ],
  declarations: [
    ProfileComponent,
    PostsComponent
  ],
  //exports: [ProfileComponent]
})
export class ProfileModule { }