import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url="http://localhost:8080";//arreglar, no se cual va

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("El servicio portfolio esta corriendo");//no me esta funcionando
    return this.http.get<any>(this.url+"persona");
  }
}
