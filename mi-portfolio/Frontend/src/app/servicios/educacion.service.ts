import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educacion/';

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.URL}obtener`);
  }

  public findEducacion(idEducacion?:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.URL}encontrar/${idEducacion}`);
  }

  public agregarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.URL}crear`, educacion);
  }

  public eliminarEducacion(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}borrar/${id}`);
  }

  public editarEducacion(id:number, educacion:Educacion):Observable<any>{
    return this.http.put<any>(`${this.URL}editar/${id}`, educacion);
  }

  public detail(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.URL}detail/${id}`);
  }

}
