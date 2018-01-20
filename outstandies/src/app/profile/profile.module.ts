import { SharedModule } from './../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  exports: [SharedModule],
  declarations: [ProfileComponent]
})
export class ProfileModule { }