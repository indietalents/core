import { Injectable }                        from '@angular/core';

import { FormData, MainInfo, Subtype, Type } from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isTypeFormValid: boolean = false;
    private isSubtypeFormValid: boolean = false;
    private isMainInfoFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getType(): string {
        var type: string = this.formData.type;
        return type;
    }

    setType(type: string) {
        this.isTypeFormValid = true;
        this.formData.type = type;
  
        this.workflowService.validateStep(STEPS.type);
    }

    getSubtype() : string {
        return this.formData.subtype;
    }
    
    setSubtype(subtype: string) {
        this.isSubtypeFormValid = true;
        this.formData.subtype = subtype;

        this.workflowService.validateStep(STEPS.subtype);
    }

    getMainInfo() : MainInfo {
        var info: MainInfo = {
            name: this.formData.name,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return info;
    }

    setMainInfo(data: MainInfo) {
        this.isMainInfoFormValid = true;
        this.formData.name = data.name;
        this.formData.lastName = data.lastName
        this.formData.email = data.email;

        this.workflowService.validateStep(STEPS.info);
    }

    getFormData(): FormData {
        return this.formData;
    }

    resetFormData(): FormData {
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isTypeFormValid = this.isSubtypeFormValid = this.isMainInfoFormValid = false;
        return this.formData;
    }

    isFormValid() {
        return this.isTypeFormValid &&
                this.isSubtypeFormValid && 
                this.isMainInfoFormValid;
    }
}