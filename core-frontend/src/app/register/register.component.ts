import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../shared/services/index';
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
        private userService: UserService,
        private fb: FormBuilder) { 
        }

    ngOnInit() {

        this.registerForm = this.fb.group({
            name: ['', [Validators.required, 
                Validators.minLength(3)]],
            password: ['', [Validators.required, 
                Validators.minLength(3)]]
        });
    }
    
    get name() { return this.registerForm.get('email'); }
    
    get password() { return this.registerForm.get('password'); }

    onSubmit() {
        console.log("onSubmit()");
        if (this.registerForm.valid) {
            this.register();
        }
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/']);
                },
                error => {
                    this.loading = false;
                });
    }
}
