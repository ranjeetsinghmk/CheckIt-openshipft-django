import { Component } from '@angular/core';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { UpdatesService } from "./_services/updates";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  icon = './static/images/icon.png';
  toolbar_color = '#ee0';
  primary = '#ee0';
  creativeBlock = "<font size='2' color='blue' >Creative block</font>";

  private subscription: Subscription;
  constructor(private UpdatesService: UpdatesService) {

  }

  ngOnInit() {
    this.creativeBlock = this.UpdatesService.getTopCreativeMessage(this.creativeBlock);
    let timer = TimerObservable.create(2000, 2000);
    this.subscription = timer.subscribe(t => {
      this.creativeBlock = this.UpdatesService.getTopCreativeMessage(this.creativeBlock);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
