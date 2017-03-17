import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'checkit-autocomplete',
    templateUrl: './autocomplete.html',
})
export class CheckItAutoComplete {
    searchCntrl = new FormControl();
    filteredItems: Observable<string[]>;

    items = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];

    ngOnInit() {
        this.filteredItems = this.searchCntrl.valueChanges
            .startWith(null)
            //  .map(user => user && typeof user === 'object' ? user.name : user)
            .map(item => item ? this.filter(item) : this.items);
    }

    filter(name: string): string[] {
        return name ? this.items.filter(option => new RegExp(name, 'gi').test(option)) : this.items;
    }
    displayFn(item: any): string {
        return item ? item + " T" : item;
    }

}