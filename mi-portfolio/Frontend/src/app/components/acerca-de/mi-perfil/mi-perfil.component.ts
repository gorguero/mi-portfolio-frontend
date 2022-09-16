import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  
  personaList:any;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  public obtenerDatos(){

    this.personaService.getPersona().subscribe(
      data => {
        this.personaList = data;
      }
    )

  }

}
