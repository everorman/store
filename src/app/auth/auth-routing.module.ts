import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SigninComponent,
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent,
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-in',
      },
      { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, // redirect to `first-component`
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
