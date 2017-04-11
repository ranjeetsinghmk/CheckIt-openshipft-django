import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs";
import { User } from '../_models/index';

@Injectable()
export class UserService {
    base = "http://api-dtr.rhcloud.com/" || "http://127.0.0.1:8000";
    constructor(private http: Http) { }

    authenticate(user: User) {
        return this.http.post(this.base + '/api-token-auth/', user).map((response: Response) => response.json());
    }

    getMyDetails() {
        return this.http.get(this.base + '/api/users/get_my_details/', this.jwt()).map((response: Response) => response.json());
    }

    searchInAll(query) {
        return this.http.get(this.base + '/api/users/?search=' + query).map((res: Response) => res.json());
    }


    getAll(url): Observable<any> {
        return this.http.get(url || this.base + '/api/users.json').map(
            (response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(this.base + '/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(this.base + '/api/users/', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(this.base + '/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete(this.base + '/api/users/' + id, this.jwt()).map((response: Response) => response.json());
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
        } else {
            return new RequestOptions();
        }
    }
}