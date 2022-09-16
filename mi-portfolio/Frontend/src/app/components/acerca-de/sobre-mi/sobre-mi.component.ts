import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  personaList:any;

  constructor(private personaService:PersonaService, private datosPortfolio:PorfolioService) { }

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
