import { Component } from '@angular/core';
import { BlogBodyComponent } from "../blog-body/blog-body.component";
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  imports: [BlogBodyComponent],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  constructor(private toast: NgToastService, private router : Router ){}

  dashboard()
  {
    this.router.navigateByUrl("Dashboard");
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('');
    this.toast.success("Log Out sucessfully");
  }
}
