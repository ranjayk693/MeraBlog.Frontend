import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../Services/common.service';
import { ApiUrlService } from '../../ApiUrl/api-url.service';
import {NgToastModule, NgToastService} from 'ng-angular-popup';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgToastModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm!: FormGroup;
  // 
  constructor(private fb: FormBuilder,private http : CommonService,
     public url: ApiUrlService, private toast: NgToastService, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.http.Login( this.url.UserUrl.Login ,this.loginForm.value).subscribe(res =>{
          localStorage.setItem("BLGTKN",res?.token)
          this.toast.success("Login Sucess");
          this.router.navigateByUrl('Home/User');
      }, err => {
        console.log(err)
        this.toast.danger(err.error);
      });
    }
  }

  googleLogin(): void {
    console.log('Google Login Clicked');
    // Implement Google OAuth logic
  }

  microsoftLogin(): void {
    console.log('Microsoft Login Clicked');
    // Implement Microsoft OAuth logic
  }

 
}
