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
        // this.userService.getAll().map(re=>{
        //     console.log(re);
        //     this.users = re
        // })
        this.users = [{
            id: 1,
            username: "usr",
            email: "em@em.com",
            name: "First user",
            password: ""
        }, {
            id: 2,
            username: "usr",
            email: "em@em.com",
            name: "Second uses",
            password: ""
        }];
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