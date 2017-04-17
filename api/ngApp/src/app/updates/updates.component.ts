import { Component, OnInit } from '@angular/core';

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
  constructor(private updatesService: UpdatesService) {
    this.message = "Welcome";
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