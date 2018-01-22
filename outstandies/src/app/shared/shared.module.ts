import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmptyComponent } from './components/empty/empty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [EmptyComponent],
  exports: [EmptyComponent]
})
export class SharedModule { }