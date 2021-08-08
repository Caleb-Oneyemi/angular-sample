import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as _ from 'underscore';
import { BroadcastService, EventKeys } from './services/broadcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  @ViewChild('sidenav') sidenav: MatSidenav | null = null;

  constructor(broadCastService: BroadcastService) {
    _.bindAll(this, 'onLoginClicked', 'onLoginEvent');
    broadCastService
      .on(EventKeys.LOGIN_BUTTON_CLICKED)
      .subscribe(this.onLoginClicked);
    broadCastService
      .on(EventKeys.USER_LOGIN_EVENT)
      .subscribe(this.onLoginEvent);
  }

  onLoginClicked(event: string) {
    console.log(`AppComponent received : ${event}`);
    this.sidenav?.open();
  }

  onLoginEvent() {
    console.log(`close!!!! received : ${event}`);
    this.sidenav?.close();
  }
}
