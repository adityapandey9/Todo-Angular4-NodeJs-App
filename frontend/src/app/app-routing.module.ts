import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';
import { AddNewComponent } from './add-new/add-new.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginRedirect]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginRedirect]
  },
  {
    path: 'dashboard',
    component: StatusComponent,
    canActivate:
    [EnsureAuthenticated]
  },
  {
    path: 'addnew',
    component: AddNewComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
