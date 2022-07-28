import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  sobreMi:any;
  disponibilidad:any;
  informacionDeContacto:any;

  constructor(private dataPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.dataPorfolio.obtenerDatos().subscribe(data => {
      this.sobreMi = data.sobreMi;
      this.disponibilidad = data.disponibilidad;
      this.informacionDeContacto = data.infoDeContacto;
    })
  }

}
