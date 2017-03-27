import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';

import { User } from '../../_models/user';
@Component({
    selector: 'checkit-autocomplete',
    templateUrl: './autocomplete.html',
})
export class CheckItAutoComplete {
    searchCntrl = new FormControl();
    filteredItems: Observable<User[]>;

    items = [
        new User({ "id": 6, "email": "new@gmail.com", "username": "new" }),
        new User({ "id": 5, "email": "asd@cd.com", "username": "as" }),
        new User({ "id": 4, "email": "sfsd@asds.com", "username": "sfs" }),
        new User({ "id": 3, "email": "user2@rjsite.com", "username": "user2" }),
        new User({ "id": 2, "email": "user1@rjsite.com", "username": "user1" }),
        new User({ "id": 1, "email": "admin@rjsite.com", "username": "ranjeetsingh" })
    ];

    ngOnInit() {
        this.filteredItems = this.searchCntrl.valueChanges
            .startWith(null)
            //  .map(user => user && typeof user === 'object' ? user.name : user)
            .map(item => item ? this.filter(item) : this.items);
    }

    filter(name: string): User[] {
        return name ? this.items.filter(option => new RegExp(name, 'gi').test(option.name)) : this.items;
    }
    displayFn(item: User): string {
        return item ? item.name: null;
    }

}