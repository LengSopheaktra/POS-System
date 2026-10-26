import { Routes } from '@angular/router';
import { Login } from './login/login';
import { POS } from './pos/pos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'pos', component: POS },
  { path: '**', redirectTo: 'login' },
];
