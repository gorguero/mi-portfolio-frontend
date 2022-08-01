import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = 'http://localhost:8080/usuario/';

  constructor(private http:HttpClient) { }

  public findUsuario(idUser?:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.URL}encontrar/${idUser}`);
  }

}
