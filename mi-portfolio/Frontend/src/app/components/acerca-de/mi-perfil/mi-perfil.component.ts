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

  // miPortfolio:any;
  persona:Persona = new Persona(1,"","","","","","","","","");

  constructor(private datosPersona:PersonaService) { }

  ngOnInit(): void {
    this.datosPersona.findPersona(this.persona.id).subscribe( data => {
      this.persona = data;
    });
    // this.datosPortfolio.obtenerDatos().subscribe(data => {
    //   this.miPortfolio = data;
    // })
  }

}
