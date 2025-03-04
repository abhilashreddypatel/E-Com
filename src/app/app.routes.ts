import { Routes } from '@angular/router';
import { LoginComponent } from './pages/Admin/login/login.component';
import { HomeComponent } from './learn/home/home.component';
import { DetailsComponent } from './learn/details/details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
];
