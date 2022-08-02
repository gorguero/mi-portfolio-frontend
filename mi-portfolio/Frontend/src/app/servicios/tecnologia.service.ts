import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../model/tecnologia.model';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  URL = 'http://localhost:8080/tecnologia/';

  constructor(private http:HttpClient) { }

  public getTenologia():Observable<Tecnologia[]>{
    return this.http.get<Tecnologia[]>(`${this.URL}obtener`);
  }
}
