import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  mouseOverLoginButton: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login(formValues: Record<'username' | 'password', string>) {
    this.authService.loginUser(formValues.username, formValues.password);

    this.goToEvents();
  }

  goToEvents() {
    this.router.navigate(['/events']);
  }

  onMouseEnter() {
    this.mouseOverLoginButton = true;
  }

  onMouseLeave() {
    this.mouseOverLoginButton = false;
  }

}
