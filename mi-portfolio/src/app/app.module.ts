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
import { LoginComponent } from './login/login.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { HomeComponent } from './components/home/home.component';
import { AcercadeAdmiComponent } from './administrador/acercade-admi/acercade-admi.component';
import { MiperfilComponent } from './administrador/acercade-admi/miperfil/miperfil.component';
import { SobremiComponent } from './administrador/acercade-admi/sobremi/sobremi.component';
import { EduExpAdmiComponent } from './administrador/edu-exp-admi/edu-exp-admi.component';
import { EducacionAdmiComponent } from './administrador/edu-exp-admi/educacion-admi/educacion-admi.component';
import { ExperiencialabAdmiComponent } from './administrador/edu-exp-admi/experiencialab-admi/experiencialab-admi.component';

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
    LoginComponent,
    AdministradorComponent,
    HomeComponent,
    AcercadeAdmiComponent,
    MiperfilComponent,
    SobremiComponent,
    EduExpAdmiComponent,
    EducacionAdmiComponent,
    ExperiencialabAdmiComponent,
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
