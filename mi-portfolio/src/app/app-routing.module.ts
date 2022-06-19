import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [
  {path: 'home', component:AppComponent}, //home
  {path: 'login', component:LoginComponent}, //login
  {path: 'administrador', component:AdministradorComponent} //administrador
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
