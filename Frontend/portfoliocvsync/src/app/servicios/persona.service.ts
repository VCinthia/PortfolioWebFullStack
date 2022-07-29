import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/traer'; 

  constructor(private http: HttpClient) { 
    console.log("El servicio de persona está corriendo");
  }

  public getPersona(): Observable<persona>{
    console.log("El servicio persona esta corriendo");
    return this.http.get<persona>(this.URL+'traer/perfil');
  }
}
