import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  personaList: any;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.ObtenerPersona();
  }

  public ObtenerPersona(){

    this.personaService.getPersona().subscribe(
      data => {
        this.personaList = data;
      }
    )

  }

}
