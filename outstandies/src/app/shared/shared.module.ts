import { EmptyComponent } from './components/empty/empty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmptyComponent],
  exports: [EmptyComponent]
})
export class SharedModule { }