import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'https://backend-miportfolio.herokuapp.com/proyecto/';

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.URL}obtener`);
  }

  public agregarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.URL}crear`, proyecto);
  }

  public eliminarProyecto(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}borrar/${id}`);
  }

  public editarProyecto(id:number, proyecto:Proyecto):Observable<any>{
    return this.http.put<any>(`${this.URL}editar/${id}`, proyecto);
  }

  public detail(id:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.URL}detail/${id}`);
  }

}
