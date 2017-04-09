import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs";
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    items = [
        new User({ "id": 6, "email": "new@gmail.com", "username": "new" }),
        new User({ "id": 5, "email": "asd@cd.com", "username": "as" }),
        new User({ "id": 4, "email": "sfsd@asds.com", "username": "sfs" }),
        new User({ "id": 3, "email": "user2@rjsite.com", "username": "user2" }),
        new User({ "id": 2, "email": "user1@rjsite.com", "username": "user1" }),
        new User({ "id": 1, "email": "admin@rjsite.com", "username": "ranjeetsingh" })
    ];
    authenticate(user: User) {
        return this.http.post('/api-token-auth/', user).map((response: Response) => response.json());
    }

    getMyDetails() {
        return this.http.get('/api/users/get_my_details/', this.jwt()).map((response: Response) => response.json());
    }

    getAllLocal() {
        return this.items;
    }

    getAll(): Observable<User[]> {
        this.http.get('http://api-dtr.rhcloud.com/api/users.json')
        .map(res => res.json())
        .subscribe(
            data => console.log('data: ' + data),
            err => console.error('err: ' + err),
            () => console.log('Compelete d  d d')
        );
        return this.http.get('http://127.0.0.1:8000/api/users.json').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users/', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }


    isAuthenticated(): boolean {
        return true;//JSON.parse(localStorage.getItem('currentUser'));
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Token ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }else{
            return new RequestOptions();
        }
    }
}