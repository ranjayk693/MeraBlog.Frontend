import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Pages/login/login.component";
import {NgToastModule} from 'ng-angular-popup';
import { NgToastService, ToasterPosition ,ToastType } from 'ng-angular-popup';
@Component({
  selector: 'app-root',
  imports: [ ReactiveFormsModule, RouterOutlet, NgToastModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ToasterPosition = { TOP_RIGHT: 'top-right', TOP_LEFT: 'top-left', BOTTOM_RIGHT: 'bottom-right', BOTTOM_LEFT: 'bottom-left' };
  ToasterPosition = ToasterPosition;

  title = 'Blog.Frontend';

}
