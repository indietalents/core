import { RouteTabsetModule } from '../shared/components/route-tabset/route-tabset.module';
import { TabsetModule } from './../shared/components/tabset/tabset.module';
import { SuiTabsModule } from 'ng2-semantic-ui/dist/public';
import { SharedModule } from './../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    SuiTabsModule,
    RouteTabsetModule,
  ],
  //exports: [SharedModule],
  declarations: [ProfileComponent]
})
export class ProfileModule { }