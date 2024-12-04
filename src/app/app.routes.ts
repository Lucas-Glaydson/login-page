import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'prefix'},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent}
];
