import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../model/experienciaLaboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  URL = 'https://backend-miportfolio.herokuapp.com/expLaboral/';

  constructor(private http:HttpClient) { }

  public getExperienciaLaboral():Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(`${this.URL}obtener`);
  }

  public agregarExperienciaLaboral(experienciaLaboral:ExperienciaLaboral):Observable<ExperienciaLaboral>{
    return this.http.post<ExperienciaLaboral>(`${this.URL}crear`,experienciaLaboral);
  }

  public eliminarExperienciaLaboral(id:number):Observable<any>{
    return this.http.delete<any>(`${this.URL}borrar/${id}`);
  }

  public editarExperienciaLaboral(id:number, expLaboral:ExperienciaLaboral):Observable<any>{
    return this.http.put<any>(`${this.URL}editar/${id}`,expLaboral);
  }

  public findExperienciaLaboral(id:number):Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(`${this.URL}encontrar/${id}`);
  }

  public detail(id:number):Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(`${this.URL}detail/${id}`);
  }

}
