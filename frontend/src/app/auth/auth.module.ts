import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ThemeModule } from '../@theme/theme.module';
import { RegistrationRoutingModule } from './registration/registration-routing.module';
import { FormsModule } from './../pages/forms/forms.module';
import { RouterModule } from '@angular/router';
import { RegistrationModule } from './registration/registration.module';
import { MainInfoComponent } from './registration/main-info/main-info.component';
import { SubtypeComponent } from './registration/subtype/subtype.component';
import { TypeComponent } from './registration/type/type.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    AuthRoutingModule, CommonModule, ThemeModule, RouterModule, FormsModule, RegistrationModule
  ],
  //exports: [Auth],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }