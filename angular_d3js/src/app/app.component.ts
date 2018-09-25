import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Zenika';
  name: string;
  userName$: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userName$ = this.userService.getUserName()
      .subscribe((res) => this.name = res);
  }

  ngOnDestroy() {
    this.userName$.unsubscribe();
  }

}
