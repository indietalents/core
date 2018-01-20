import { SharedModule } from './shared/shared.module';
import { routes } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SuiModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //SharedModule,
    routes,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
