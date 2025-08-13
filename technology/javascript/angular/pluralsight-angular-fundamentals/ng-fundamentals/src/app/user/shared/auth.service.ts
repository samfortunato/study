import { Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      username: 'Yo Momma',
      firstName: 'Yo',
      lastName: 'Momma',
    };
  }

  isLoggedIn() {
    return !!this.currentUser;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
