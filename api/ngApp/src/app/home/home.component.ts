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
            console.log("Going.. " + re);
            this.users = re;
        });
        // this.users = this.userService.getAllLocal();
        // console.log(this.users);
        this.authenticated = true;
    }

    ngOnInit(): void {
        this.authenticated = true;//this.userService.isAuthenticated();
        this.fetchUsers();
    }
    constructor(
        private userService: UserService,
        private alertService: AlertService) {
        this.authenticated = false;
    }
}