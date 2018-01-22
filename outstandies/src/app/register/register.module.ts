import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule      
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }