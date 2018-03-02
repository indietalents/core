import { MsgGroupComponent } from './shared/components/msg-group/msg-group.component';
import { JwtService } from './shared/services/jwt.service';
import { ApiService } from './shared/services/api/api.service';
import { fakeBackendProvider } from './shared/helpers/fake-backend';
import { AuthService } from './shared/services/auth.service';
import { JwtInterceptor } from './shared/helpers/jwt-intercptor';
import { UserService } from './shared/services/user.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './shared/components/empty/empty.component';
import { SharedModule } from './shared/shared.module';
import { appRoutes } from './app.routing';
import { ProfileComponent } from './profile/profile.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
    //EmptyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    LoginModule,
    RegisterModule,
    SuiModule,
    DashboardModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } 
    )
  ],
  providers: [
    AuthGuard,
    AuthService,
    ApiService,
    JwtService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor ,
        multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
