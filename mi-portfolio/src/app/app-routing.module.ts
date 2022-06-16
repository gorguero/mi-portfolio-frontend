import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SesionComponent } from '../app/components/sesion/sesion.component';

const routes: Routes = [
  {path: 'sesion', component: SesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
