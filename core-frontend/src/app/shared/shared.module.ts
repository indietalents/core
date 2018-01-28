import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmptyComponent } from './components/empty/empty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [EmptyComponent],
  exports: [EmptyComponent, CommonModule, FormsModule, RouterModule, HttpClientModule, HttpModule]
})
export class SharedModule { }