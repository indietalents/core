import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FollowersComponent } from './followers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FollowersComponent],
  exports: [FollowersComponent]
})
export class FollowersModule { }