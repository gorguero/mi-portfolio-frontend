import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList:any;

constructor(private dataProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.dataProyecto.getProyecto().subscribe(data => {
      this.proyectosList = data;
    });
  }

}
