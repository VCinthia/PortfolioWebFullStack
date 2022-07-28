import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio, Experiencia, Proyecto, Skills } from 'interfaces';
//import { ESTUDIO } from 'allModels';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/api/";

  constructor(private http: HttpClient) { }
  /*Persona*/
  obtenerDatosPersona():Observable<any>{
    console.log("El servicio portfolio persona esta corriendo");//si funciona
    return this.http.get(this.url+"portfolio/personas/ver/");//si funciona! -> va la dir del request
  }

  /*Educacion*/
  obtenerDatosEducacion():Observable<Estudio[]>{
    console.log("El servicio portfolio educacion esta corriendo");
    return this.http.get<any>(this.url+"portfolio/estudio/ver");
  }
  crearDatosEducacion(estudio: Estudio):Observable<Estudio>{    
    return this.http.post<any>(this.url+"portfolio/estudio/crear", estudio);
  }
  editarDatosEducacion(estudio: Estudio):Observable<Estudio>{ 
    return this.http.put<any>(this.url+"portfolio/estudio/save", estudio);
  } 
  eliminarDatosEducacion(id: number):Observable<Estudio>{    
    return this.http.delete<any>(this.url+"portfolio/estudio/delete/"+ id);
  }  

  /*Experiencia*/
  obtenerDatosExperiencia():Observable<Experiencia[]>{
    console.log("El servicio portfolio experiencia esta corriendo");
    return this.http.get<any>(this.url+"portfolio/experiencia/ver");
  }
  crearDatosExperiencia(experiencia: Experiencia):Observable<Experiencia>{    
    return this.http.post<any>(this.url+"portfolio/experiencia/crear", experiencia);
  }
  editarDatosExperiencia(experiencia: Experiencia):Observable<Experiencia>{ 
    return this.http.put<any>(this.url+"portfolio/experiencia/save", experiencia);
  } 
  eliminarDatosExperiencia(id: number):Observable<Experiencia>{    
    return this.http.delete<any>(this.url+"portfolio/experiencia/delete/"+ id);
  }

  /*Proyectos*/
  obtenerDatosProyecto():Observable<Proyecto[]>{
    console.log("El servicio portfolio proyecto esta corriendo");
    return this.http.get<any>(this.url+"portfolio/proyectos/ver");
  }
  crearDatosProyecto(proyecto: Proyecto):Observable<Proyecto>{    
    return this.http.post<any>(this.url+"portfolio/proyectos/crear", proyecto);
  }
  editarDatosProyecto(proyecto: Proyecto):Observable<Proyecto>{ 
    return this.http.put<any>(this.url+"portfolio/proyectos/save", proyecto);
  } 
  eliminarDatosProyecto(id: number):Observable<Proyecto>{    
    return this.http.delete<any>(this.url+"portfolio/proyectos/delete/"+ id);
  } 
  
  /*Skills*/
  obtenerDatosSkill():Observable<Skills[]>{
    console.log("El servicio portfolio skills esta corriendo");
    return this.http.get<any>(this.url+"portfolio/skill/ver");
  }
  crearDatosSkill(skills: Skills):Observable<Skills>{    
    return this.http.post<any>(this.url+"portfolio/skill/crear", skills);
  }
  editarDatosSkill(skills: Skills):Observable<Skills>{ ///////////
    return this.http.put<any>(this.url+"portfolio/skill/save", skills);
  } 
  eliminarDatosSkill(id: number):Observable<Skills>{    
    return this.http.delete<any>(this.url+"portfolio/skill/delete/"+ id);
  }
} 
