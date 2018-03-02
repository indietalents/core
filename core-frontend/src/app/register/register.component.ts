import { AuthService } from './../shared/services/auth.service';
import { CustomValidators } from './../shared/services/form/custom-validators';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'register',
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {

    public registerForm: FormGroup;

    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private fb: FormBuilder) { 
        }

    ngOnInit() {
        this.buildForm();  
        //this.onChanges(); 
        debugger;
    }

    public buildForm() {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required, 
                Validators.minLength(3)]],
            password: ['', [Validators.required, 
                Validators.minLength(3)]],
            // username: ['', [Validators.required, 
            //     CustomValidators.validateCharacters]],
        });
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.registerForm.controls[controlName];
        const result = control.invalid && control.touched;
        return result;
    }
    
    get username() { return this.registerForm.get('username'); }
    
    get password() { return this.registerForm.get('password'); }

    onSubmit() {
        console.log("onSubmit()");
        const controls = this.registerForm.controls;
        if (this.registerForm.invalid) {
            Object.keys(controls)
                .forEach(controlName => controls[controlName].markAsTouched());
            return;
        } else {
            this.register();
        }

    }

    register() {
        this.loading = true;
        console.log(this.model);
        this.authService.login(this.model)
            // .subscribe(
            //     data => {
            //         this.router.navigate(['/']);
            //     },
            //     error => {
            //         this.loading = false;
            //         // show message
            //     });
    }
}
