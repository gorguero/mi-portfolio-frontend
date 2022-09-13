import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = 'http://localhost:8080/skill/';

  constructor(private http:HttpClient) { }

  public getSoftskill():Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(`${this.URL}obtener`);
  }

  public agregarSoftskill(softskill:Habilidades):Observable<Habilidades>{
    return this.http.post<Habilidades>(`${this.URL}crear`, softskill);
  }

  public eliminarSoftskill(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}borrar/${id}`);
  }

  public editarSoftskill(id:number, softskill:Habilidades):Observable<any>{
    return this.http.put<any>(`${this.URL}editar/${id}`, softskill);
  }

  // public findSoftskill(id:number):Observable<Habilidades>{
  //   return this.http.get<Habilidades>(`${this.URL}encontrar/${id}`);
  // }

  public detail(id:number):Observable<Habilidades>{
    return this.http.get<Habilidades>(`${this.URL}detail/${id}`);
  }

}
