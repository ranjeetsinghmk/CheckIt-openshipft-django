import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UpdatesService } from "../_services/updates";


@Component({
  selector: "update-component",
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})

export class UpdatesComponent implements OnInit {
  message: string;
  primary = "#e44";
  back_url = "./static/updates/assets/img/back.jpg";
  right_image = "./static/updates/assets/img/games.png";
  menus;
  constructor(private updatesService: UpdatesService,
    private route: ActivatedRoute,
    private router: Router) {
    this.message = "Welcome";
  }


  // tmp(){
  // this.route.params
  //   // (+) converts string 'id' to a number
  //   .switchMap((params: Params) => this.service.getHero(+params['id']))
  //   .subscribe((hero: Hero) => this.hero = hero);
  // }

  showDetails(url: string) {
    if (typeof (url) == 'number' && url > 0) {
      this.router.navigateByUrl('/products/core/' + url);
    } else
      if (url && url.length > 0) {
        if (new RegExp('^(http://)|(https://)', 'i').test(url)) {
          open(url, '_self');
        } else {
          this.router.navigateByUrl(url);
        }
      }
  }

  ngOnInit() {
    this.updatesService.getUpdatesMenuItems().subscribe(
      data => this.menus = data,
      err => {
        console.error(err);
      },
      () => {
        console.log("Fetch done");
      }
    );
  }
}