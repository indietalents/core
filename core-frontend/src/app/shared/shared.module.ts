import { ExtInputComponent } from './components/ext-input/ext-input.component';
import { MsgGroupComponent } from './components/msg-group/msg-group.component';
import { SuperPostComponent } from './components/super-post/super-post.component'
import { PostComponent } from './components/post/post.component';
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

  declarations: [
    EmptyComponent, 
    PostComponent, 
    SuperPostComponent, 
    MsgGroupComponent,
    ExtInputComponent
  ],

  exports: [
    EmptyComponent, 
    PostComponent, 
    SuperPostComponent, 
    MsgGroupComponent, 
    ExtInputComponent,
    CommonModule, 
    FormsModule, 
    RouterModule, 
    HttpClientModule, 
    HttpModule]
})
export class SharedModule { }