import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';

import { RouteTabsetComponent } from './route-tabset.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    RouteTabsetComponent,
  ],
  exports: [
    RouteTabsetComponent,
  ],
})
export class RouteTabsetModule { }