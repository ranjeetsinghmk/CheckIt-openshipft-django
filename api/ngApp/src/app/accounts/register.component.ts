import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { StringUtil } from '../_utils/index';

@Component({
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    error = false;
    error_message: any;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private stringUtil: StringUtil) { }


    getUserModel(): any {
        var um = {
            email: this.model.email,
            username: this.stringUtil.getUsername(this.model.email),
            password: this.model.password,
            name: ""
        };
        console.log(um);
        return um;
    }

    register() {
        this.loading = true;
        this.error = false;
        this.error_message = "";
        this.userService.create(this.getUserModel())
            .subscribe(
            data => {
                console.log("Success " + data);
                this.error = false;
                this.error_message = "";
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                console.error("Register Error " + error);
                this.error = true;
                this.error_message = error;
                this.alertService.error(error);
                this.loading = false;
            });
    }
}