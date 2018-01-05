import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideosComponent],
  exports: [VideosComponent]
})
export class VideosModule { }