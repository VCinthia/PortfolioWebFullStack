import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
//import { JwtDto } from '../model/jwt-dto';
//import { LoginUsuario } from '../model/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  //url="http://localhost:8080/api/login";//OK!
  url="https://cvportfolioap.herokuapp.com/api/login"

  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("El servicio de autenticación está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

    IniciarSesion(credenciales:any):Observable<any>{
      return this.http.post(this.url, credenciales).pipe(map(data=>{
        sessionStorage.setItem('currentUser'||'{}', JSON.stringify(data));
        this.currentUserSubject.next(data);
          return data;
       }))
      }
    
    /*public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
     /*return this.httpClient.post<JwtDto>(this.authUrl+'login', loginUsuario);{
     return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
         return data;
     }))
    }*/
    
    get UsuarioAutenticado (){
      return this.currentUserSubject.value;
    }

    public logout(){
      sessionStorage.removeItem('currentUser');
    }

    public isUserLogged():boolean{
      return sessionStorage.getItem('currentUser')!== null;
    }

}
