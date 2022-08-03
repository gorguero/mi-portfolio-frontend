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

  // sobreMi:any;
  disponibilidad:any;
  informacionDeContacto:any;
  persona:Persona = new Persona(43,"","","","","","","","","");

  constructor(private dataPersona:PersonaService, private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.dataPersona.findPersona(this.persona.id).subscribe(data => {
      this.persona = data;
    })
    
    /* Datos reales moqueados en JSON */
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.disponibilidad = data.disponibilidad;
      this.informacionDeContacto = data.infoDeContacto;
    })
    
  }

}
