import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Detail } from "./_models/detail";
import { UpdatesService } from "../_services/updates";

@Component({
    selector: 'product-details',
    template: `
    <img height="80" width="80" src="{{detail.photo}}" />
    <p>{{detail.display_name}}</p>
    `,
    styles: []
})

export class ProductDetailComponent implements OnInit {
    detail = {
    };
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private updateService: UpdatesService) {
    }
    ngOnInit() {
        this.route.url.subscribe(paths => {
            let id = paths[1]['path'];
            this.updateService.getDetails(id).subscribe(
                detail => {
                    console.log('data', detail);
                    this.detail = detail;
                },
                err => {
                    console.error(err);
                },
                () => {
                    console.log("Fetch done");
                }
            );
        });
        this.route.params.subscribe(params => {
            // this.title = params[''];
            console.log('parmas are ', params);
        });
    }
}

