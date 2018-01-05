import { RegistrationRoutingModule } from './registration-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ThemeModule } from './../../@theme/theme.module';
import { FormDataService } from './data/formData.service';
import { MainInfoComponent } from './main-info/main-info.component';
import { SubtypeComponent } from './subtype/subtype.component';
import { TypeComponent } from './type/type.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WorkflowService } from './workflow/workflow.service';
import { WorkflowGuard } from './workflow/workflow-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    RegistrationRoutingModule, CommonModule, RouterModule, FormsModule, ThemeModule
  ],
  declarations: [
    RegistrationComponent, TypeComponent, SubtypeComponent, MainInfoComponent, NavigationComponent
  ],
  providers: [FormDataService, WorkflowService]
})
export class RegistrationModule { }