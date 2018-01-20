import { EmptyComponent } from './shared/components/empty/empty.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: MenubarComponent, children: [
            //{path: 'profile', component: ProfileComponent},
             {
                path: '',
                component: EmptyComponent
              }, {
                path: 'profile',
                loadChildren: 'app/profile/profile.module#ProfileModule'
              }
            ],
        }
    ]}
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});