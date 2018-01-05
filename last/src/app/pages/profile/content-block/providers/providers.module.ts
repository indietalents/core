import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProvidersComponent],
  exports: [ProvidersComponent]
})
export class ProvidersModule { }