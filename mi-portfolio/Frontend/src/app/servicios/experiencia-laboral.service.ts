import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExperienciaLaboral } from '../model/experienciaLaboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  URL = 'http://localhost:8080/expLaboral/';

  constructor(private http:HttpClient) { }

  public getExperienciaLaboral():Observable<ExperienciaLaboral[]>{
    return this.http.get<ExperienciaLaboral[]>(`${this.URL}obtener`);
  }

}
