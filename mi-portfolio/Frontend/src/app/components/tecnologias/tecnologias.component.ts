import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  tecnologiaList:any;

  constructor( private dataTecnologia:TecnologiaService ) { }

  ngOnInit(): void {
    this.dataTecnologia.getTenologia().subscribe( data => {
      console.log(data)
      this.tecnologiaList = data;
    } )
  }

}
