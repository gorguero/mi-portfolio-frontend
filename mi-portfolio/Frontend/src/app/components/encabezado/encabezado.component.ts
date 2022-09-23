import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  miPortfolio:any;

  isLogged = false;

  constructor(private datosPorfolio:PorfolioService, private router:Router, private tokenService:TokenService) { } //Inyectar servicio a un componente

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
