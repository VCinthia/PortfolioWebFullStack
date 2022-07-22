import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/api/";//ver

  constructor(private http:HttpClient) { }

  obtenerDatosPersona():Observable<any>{
    console.log("El servicio portfolio persona esta corriendo");//si funciona
    return this.http.get(this.url+"portfolio/personas/ver/");//si funciona! -> va la dir del request
  }

  obtenerDatosEducacion():Observable<any>{
    console.log("El servicio portfolio educacion esta corriendo");
    return this.http.get(this.url+"portfolio/estudio/ver");
  }

  obtenerDatosExperiencia():Observable<any>{
    console.log("El servicio portfolio experiencia esta corriendo");
    return this.http.get(this.url+"portfolio/experiencia/ver");
  }

  obtenerDatosProyectos():Observable<any>{
    console.log("El servicio portfolio experiencia esta corriendo");
    return this.http.get(this.url+"portfolio/proyectos/ver");
  }

  obtenerDatosSkills():Observable<any>{
    console.log("El servicio portfolio skills esta corriendo");
    return this.http.get(this.url+"portfolio/skill/ver");
  }

}
