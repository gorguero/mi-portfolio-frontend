import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  URL = 'https://backend-miportfolio.herokuapp.com/tecnologia/';

  constructor(private http:HttpClient) { }

  public getTenologia():Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(`${this.URL}obtener`);
  }

  public agregarTecnologia(tecnologia:Tecnologia):Observable<Tecnologia>{
    return this.http.post<Tecnologia>(`${this.URL}crear`, tecnologia);
  }

  public eliminarTecnologia(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}borrar/${id}`);
  }

  public editarTecnologia(id:number, tecnologia:Tecnologia):Observable<any>{
    return this.http.put<any>(`${this.URL}editar/${id}`, tecnologia);
  }

  public detail(id:number):Observable<Tecnologia>{
    return this.http.get<Tecnologia>(`${this.URL}detail/${id}`);
  }

}
