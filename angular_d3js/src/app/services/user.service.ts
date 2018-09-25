import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userName$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  updateUserName(username: string): void {
    this.userName$.next(username);
  }

  getUserName(): BehaviorSubject<string> {
    return this.userName$;
  }

}
