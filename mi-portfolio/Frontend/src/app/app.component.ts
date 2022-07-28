import { Component } from '@angular/core';
import { PorfolioService } from './servicios/porfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  miPortfolio:any;

  constructor(private datosPorfolio:PorfolioService) { } //Inyectar servicio a un componente

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }
}
