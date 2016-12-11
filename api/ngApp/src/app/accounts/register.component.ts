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
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private stringUtil: StringUtil) { }


    getUserModel(): any{
      return {
        email: this.model.email,
        username: this.stringUtil.getUsername(this.model.email),
        password: this.model.password,
        name: ""
      };
    }

    register() {
        this.loading = true;
        this.userService.create(this.getUserModel())
            .subscribe(
                data => {
                    // set success message and pass true paramater to persist the message after redirecting to the login page
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}