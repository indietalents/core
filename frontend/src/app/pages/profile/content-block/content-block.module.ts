import { RouterModule } from '@angular/router';
import { MainContentModule } from './main-content/main-content.module';
import { ContentBlockComponent } from './content-block.component';
import { PostsComponent } from './posts/posts.component';
import { ThemeModule } from './../../../@theme/theme.module';
import { ProvidersModule } from './providers/providers.module';
import { FollowersModule } from './followers/followers.module';
import { VideosModule } from './videos/videos.module';
import { MusicModule } from './music/music.module';
import { PhotosModule } from './photos/photos.module';
import { SuperPostsModule } from './super-posts/super-posts.module';
import { PostsModule } from './posts/posts.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule, 
    MainContentModule,
    PostsModule, 
    SuperPostsModule, 
    PhotosModule, 
    MusicModule, 
    VideosModule, 
    FollowersModule, 
    ProvidersModule, 
    ThemeModule, 
    RouterModule
  ],
  declarations: [ContentBlockComponent],
  exports: [ContentBlockComponent]
})
export class ContentBlockModule { }