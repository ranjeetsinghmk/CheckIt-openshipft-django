import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { UpdatesService } from "../../_services/updates";
import { UserService } from "../../_services/user.service";

import { User } from '../../_models/user';
@Component({
    selector: 'checkit-autocomplete',
    templateUrl: './autocomplete.html',
})
export class CheckItAutoComplete {
    searchCntrl = new FormControl();
    filteredUsers: Observable<User[]>;
    filteredProducts: Observable<any[]>;
    filteredResumes: Observable<any[]>;
    filteredExplore: Observable<any[]>;

    ngOnInit() {
        this.searchCntrl.valueChanges
            .startWith(null)
            //  .map(user => user && typeof user === 'object' ? user.name : user)
            .map(item => {
                console.log('Searching for ' + item);
                this.userService.searchInAll(item).subscribe(
                    data => {
                        this.filteredUsers = data;
                    }
                );
            });
    }

    // filter(name: string): User[] {
    //     return name ? this.items.filter(option => new RegExp(name, 'gi').test(option.name)) : this.items;
    // }
    displayFn(item: User): string {
        return item ? item.toString() : null;
    }

    constructor(private updatesService: UpdatesService,
        private userService: UserService) {

    }

}