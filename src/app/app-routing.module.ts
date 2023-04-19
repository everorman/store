import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './shared/signin/signin.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent,
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./authenticated/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
