import { Component } from '@angular/core';
import { User } from '../_models/user';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertService, UserService } from '../_services/index';
@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    authenticated: boolean;
    users: User[];
    next: string;
    previous: string;
    count: number;
    user_err: string;
    fetchingUsers: boolean;

    addUserWithDelay(users: User[], i) {
        console.log('-> ' + users.length + " " + i);
        if (i >= users.length) {
            this.fetchingUsers = false;
            console.log('returning...');
            return;
        }
        setTimeout(() => {
            let user = new User(users[i]);
            user.validateIt();
            this.users.push(user);
            this.addUserWithDelay(users, i + 1);
        }, 100);
    }

    handleGetUsersResponse(data: Observable<any>) {
        data.subscribe(
            data => {
                console.log('previous ' + data.previous);
                if (data.previous) {
                    this.previous = data.previous;
                } else {
                    this.users = [];
                }
                if (data.next) {
                    this.next = data.next;
                } if (data.count) {
                    this.count = data.count;
                }
                if (data.results) {
                    console.log('Old usres: ' + this.users.length);
                    this.addUserWithDelay(data.results, 0);
                    this.users
                }
                console.log(this.users.length)
            },
            err => {
                this.user_err = err;
            },
            () => {

            }
        );
    }


    fetchNextUsers() {
        this.fetchingUsers = true;
        console.log("going for " + this.next);
        this.handleGetUsersResponse(this.userService.getAll(this.next));
    }
    fetchUsers() {
        this.fetchingUsers = true;
        this.handleGetUsersResponse(this.userService.getAll(NaN));
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