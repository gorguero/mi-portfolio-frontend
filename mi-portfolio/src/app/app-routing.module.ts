import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent}, //home
  {path: 'login', component:LoginComponent}, //login
  {path: 'administrador', component:AdministradorComponent} //administrador
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
