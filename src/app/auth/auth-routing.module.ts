import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        component: SigninComponent,
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
