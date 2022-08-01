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

  public findEducacion(idEducacion?:number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.URL}encontrar/${idEducacion}`);
  }

}
