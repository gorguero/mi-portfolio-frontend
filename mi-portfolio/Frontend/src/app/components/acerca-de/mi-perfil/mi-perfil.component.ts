import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  // miPortfolio:any;
  usuario:Usuario = new Usuario("","","","","","","","","");

  constructor(private datosUsuario:UsuarioService) { }

  ngOnInit(): void {
    this.datosUsuario.findUsuario(41).subscribe( data => {
      this.usuario = data;
    });
    // this.datosPortfolio.obtenerDatos().subscribe(data => {
    //   this.miPortfolio = data;
    // })
  }

}
