import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionLoginComponent } from './pages/sesion/sesion-login/sesion-login.component';

const routes: Routes = [
  { path: '', component :SesionLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
