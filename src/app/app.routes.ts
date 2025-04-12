import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { AddBlogComponent } from './Pages/add-blog/add-blog.component';
import { UserBlogComponent } from './Pages/user-blog/user-blog.component';
import { HomeComponent } from './Pages/home/home.component';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { authGuard } from './auth.guard';
import { ForgotPasswordComponent } from './Pages/forgot-password/forgot-password.component';
import { RegisterUserComponent } from './Pages/register-user/register-user.component';
import { BlogDetailComponent } from './Pages/blog-detail/blog-detail.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { BlogBodyComponent } from './Pages/blog-body/blog-body.component';

export const routes: Routes = [
    {path : '', redirectTo : 'Home',  pathMatch: 'full' },
    {path: 'Home', component : HomeComponent , 
        children: [
            {path:'Blog', component : BlogBodyComponent},
            {path:'Login', component : LoginComponent},
            {path: 'ForgotPassword', component : ForgotPasswordComponent},
            {path : 'register' , component : RegisterUserComponent},
        ]
    },
    {path: 'detail/:id', component : BlogDetailComponent},
    {path : 'Home/User',component : UserHomeComponent , canActivate : [authGuard],
        children : [
            {path : 'Add', component : AddBlogComponent},
            {path : 'view', component : UserBlogComponent},
        ]
    },
    {path : 'Dashboard', component : DashboardComponent , canActivate: [authGuard]},
    {path : '**', redirectTo : ''}
];