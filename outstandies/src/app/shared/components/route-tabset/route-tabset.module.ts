import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';

import { RouteTabsetComponent } from './route-tabset.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    RouteTabsetComponent,
  ],
  exports: [
    RouteTabsetComponent,
  ],
})
export class RouteTabsetModule { }