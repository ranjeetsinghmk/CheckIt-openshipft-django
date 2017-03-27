import { Component } from '@angular/core';
import { User } from '../_models/user';
import { OnInit } from '@angular/core';
import { AlertService, UserService } from '../_services/index';
@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    authenticated: boolean;
    users: User[];
    fetchUsers() {
        this.userService.getAll().map(re => {
            this.users = re
            console.log("Going..");
        });
        this.authenticated = true;
    }

    ngOnInit(): void {
        this.authenticated = this.userService.isAuthenticated();
        this.fetchUsers();
    }
    constructor(
        private userService: UserService,
        private alertService: AlertService) {
        this.authenticated = false;
    }
}