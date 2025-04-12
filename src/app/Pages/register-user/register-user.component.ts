import { Component } from '@angular/core';
import { UserDtos } from '../../Models/UserDtos';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule, RouterLink],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  constructor(private toast: NgToastService) {}

  user: UserDtos = {
    userName: '',
    userEmail: '',
    password: '',
    firstName: '',
  };

  onSubmit() {
    if (!this.user.userName || !this.user.userEmail || !this.user.password || !this.user.firstName) {
      alert('Please fill out all required fields.');
      return;
    }

    console.log('User Registered:', this.user);
    alert('User Registered Successfully!');
  }
}
