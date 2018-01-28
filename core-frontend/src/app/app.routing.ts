import { AuthGuard } from './shared/guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyComponent } from './shared/components/empty/empty.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';

export const appRoutes: Routes = [
    {path: '', component: AppComponent, 
        children: [
            {path: '', component: MenubarComponent, children: [
                {
                    canActivate: [AuthGuard],
                    path: 'profile',
                    loadChildren: 'app/profile/profile.module#ProfileModule'
                },
                // {
                //     path: 'dashboard',
                //     loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                // }
                ],
            }, {
                path: 'dashboard',
                component: DashboardComponent
            }, {
                path: 'login',
                component: LoginComponent
            }, {
                path: 'register',
                component: RegisterComponent
            }
        ]
    }
];
