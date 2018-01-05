import { WorkflowGuard } from './registration/workflow/workflow-guard.service';
import { AuthComponent } from './auth.component';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        loadChildren: 'app/auth/registration/registration.module#RegistrationModule',
      },
      {
        path: 'login',
        loadChildren: 'app/auth/registration/registration.module#RegistrationModule',
      },
      // {
      //   path: 'register',
      //   loadChildren: 'app/auth/registration/registration.module#RegistrationModule',
      // },
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      { path: '**', redirectTo: 'register' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
 providers: [WorkflowGuard]
})
export class AuthRoutingModule {}