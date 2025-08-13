import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();

    const firstName = new FormControl(currentUser.firstName, [Validators.required, Validators.pattern(/[a-zA-Z].*/)]);
    const lastName = new FormControl(currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({ firstName, lastName });
  }

  getFirstNameControl() { return this.profileForm.get('firstName'); }
  getLastNameControl() { return this.profileForm.get('lastName'); }

  saveProfile(formValue: Record<'firstName' | 'lastName', string>) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);

      this.goToEvents();
    }
  }

  goToEvents() {
    this.router.navigate(['events']);
  }

  logErrors() {
    console.log(this.getFirstNameControl().errors);
  }

}
