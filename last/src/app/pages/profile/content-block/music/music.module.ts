import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicComponent],
  exports: [MusicComponent]
})
export class MusicModule { }