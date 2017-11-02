import { AuthComponent } from './auth/auth.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'profile', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth' },
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
