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
}
