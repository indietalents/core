import { RouterModule } from '@angular/router';
import { ThemeModule } from './../../../@theme/theme.module';
import { InfoBlockComponent } from './info-block/info-block.component';
import { PhotoBlockComponent } from './photo-block/photo-block.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBlockComponent } from './header-block.component';

@NgModule({
  imports: [
    CommonModule, ThemeModule, RouterModule
  ],
  declarations: [HeaderBlockComponent, PhotoBlockComponent, InfoBlockComponent],
  exports: [HeaderBlockComponent]
})
export class HeaderBlockModule { }