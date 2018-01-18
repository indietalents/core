import { RegistrationComponent } from './registration.component';
import { WorkflowGuard } from './workflow/workflow-guard.service';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainInfoComponent } from './main-info/main-info.component';
import { SubtypeComponent } from './subtype/subtype.component';
import { TypeComponent } from './type/type.component';


export const appRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
          { path: 'type',  component: TypeComponent },
      
          { path: 'subtype',  component: SubtypeComponent/*, canActivate: [WorkflowGuard]*/ },
      
          { path: 'info',  component: MainInfoComponent/*, canActivate: [WorkflowGuard]*/ },
      
          { path: '',   redirectTo: 'type', pathMatch: 'full' },
      
          { path: '**', component: MainInfoComponent }
    ]
  }

    
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})
export class RegistrationRoutingModule {}