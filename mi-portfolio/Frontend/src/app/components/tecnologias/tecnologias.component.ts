import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  miPorfolio:any;

  constructor( private dataPorfolio:PorfolioService ) { }

  ngOnInit(): void {
    this.dataPorfolio.obtenerDatos().subscribe( info => {
      this.miPorfolio = info.tecnologias;
    } )
  }

}
