import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backend-miportfolio.herokuapp.com/persona/';

  constructor(private http:HttpClient) { }

  public findPersona(idPersona?:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.URL}encontrar/${idPersona}`);
  }

  public getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}obtener`);
  }

  public editarSoftskill(id:number, persona:Persona):Observable<any>{
    return this.http.put<any>(`${this.URL}editar/${id}`, persona);
  }

  public detail(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.URL}detail/${id}`);
  }

}
