import { ProfileRoutingModule } from './profile.routing.module';
import { ContentBlockRoutingModule } from './content-block/content-block-routing.module';
import { ContentBlockModule } from './content-block/content-block.module';
import { ContentBlockComponent } from './content-block/content-block.component';
import { ThemeModule } from './../../@theme/theme.module';
import { HeaderBlockModule } from './header-block/header-block.module';
import { PostWallComponent } from './post-wall/post-wall.component';
import { HeaderBlockComponent } from './header-block/header-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule, HeaderBlockModule, ContentBlockModule, ThemeModule, //ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent]
})
export class ProfileModule { }