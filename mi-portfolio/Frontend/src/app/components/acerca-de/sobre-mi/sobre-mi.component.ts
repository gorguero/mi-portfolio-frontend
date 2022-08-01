import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  // sobreMi:any;
  disponibilidad:any;
  informacionDeContacto:any;
  usuario:Usuario = new Usuario(41,"","","","","","","","","");

  constructor(private dataUsuario:UsuarioService, private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.dataUsuario.findUsuario(this.usuario.id).subscribe(data => {
      this.usuario = data;
    })
    
    /* Datos reales moqueados en JSON */
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.disponibilidad = data.disponibilidad;
      this.informacionDeContacto = data.infoDeContacto;
    })
    
  }

}
