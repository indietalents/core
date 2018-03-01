import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperpostsComponent } from './superposts.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: SuperpostsComponent, pathMatch: 'full'}
    ]),
  ],
  declarations: [SuperpostsComponent]
})
export class SuperpostsModule { }