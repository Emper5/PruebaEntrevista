import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CarsComponent } from './components/cars/cars.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cars', component: CarsComponent, canActivate : [AuthGuardService]},
  { path: '**', redirectTo: '/cars' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
