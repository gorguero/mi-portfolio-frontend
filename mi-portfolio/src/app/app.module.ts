import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { MiPerfilComponent } from './components/acerca-de/mi-perfil/mi-perfil.component';
import { SobreMiComponent } from './components/acerca-de/sobre-mi/sobre-mi.component';
import { EducacionYExperienciaComponent } from './components/educacion-y-experiencia/educacion-y-experiencia.component';
import { EducacionComponent } from './components/educacion-y-experiencia/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/educacion-y-experiencia/experiencia-laboral/experiencia-laboral.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { SesionComponent } from './components/sesion/sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    MiPerfilComponent,
    SobreMiComponent,
    EducacionYExperienciaComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    HabilidadesComponent,
    TecnologiasComponent,
    ProyectosComponent,
    FooterComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
