import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  public findPersona(idPersona?:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.URL}encontrar/${idPersona}`);
  }

  public getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.URL}obtener`);
  }

  // public editPersona(idPerson:number, nuevoNombre:string, nuevoApellido:string,):Observable<Persona>{
  //   return this.http.put<any>(`${this.URL}editar/${idPersona}`);
  // }

}
