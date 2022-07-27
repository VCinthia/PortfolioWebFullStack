import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio } from 'interfaces';
//import { ESTUDIO } from 'allModels';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/api/";//ver

  constructor(private http:HttpClient) { }
  /*Persona*/
  obtenerDatosPersona():Observable<any>{
    console.log("El servicio portfolio persona esta corriendo");//si funciona
    return this.http.get(this.url+"portfolio/personas/ver/");//si funciona! -> va la dir del request
  }

  /*Educacion*/
  obtenerDatosEducacion():Observable<any>{
    console.log("El servicio portfolio educacion esta corriendo");
    return this.http.get<any>(this.url+"portfolio/estudio/ver");
  }
  crearDatosEducacion(estudio: Estudio):Observable<any>{    
    return this.http.post<any>(this.url+"portfolio/estudio/crear", estudio);
  }    
  eliminarDatosEducacion(estudio: Estudio):Observable<any>{    
    return this.http.delete<any>(this.url+"portfolio/estudio/delete/"+ estudio.id);
  }  
  editarDatosEducacion(estudio: Estudio):Observable<any>{ 
    return this.http.put<any>(this.url+"/api/portfolio/estudio/save", estudio);
  }

  /*Experiencia*/
  obtenerDatosExperiencia():Observable<any>{
    console.log("El servicio portfolio experiencia esta corriendo");
    return this.http.get(this.url+"portfolio/experiencia/ver");
  }

  /*Proyectos*/
  obtenerDatosProyectos():Observable<any>{
    console.log("El servicio portfolio experiencia esta corriendo");
    return this.http.get(this.url+"portfolio/proyectos/ver");
  }
  
  /*Skills*/
  obtenerDatosSkills():Observable<any>{
    console.log("El servicio portfolio skills esta corriendo");
    return this.http.get(this.url+"portfolio/skill/ver");
  }

}
