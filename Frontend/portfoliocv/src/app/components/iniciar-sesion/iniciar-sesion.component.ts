import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideRoutes, Router } from '@angular/router';

//import { LoginUsuario } from 'src/app/model/login-usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
  
})

export class IniciarSesionComponent implements OnInit {
  /*isLogged=false;
  isLogginFail=false;
  loginUsuario!:LoginUsuario;
  email!:string;
  password!:string;
  errorMsj!: string;*/
  
  form:FormGroup;
  constructor(/*private tokenService: TokenService*/private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private router: Router) { 
    this.form=this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        /*deviceInfo:this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })*/
      }
    )
  }

  ngOnInit(): void {
    /*if (this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
    }*/
  }

  
  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }
  
  onLogin(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(/*accessToken*/data/*[1]*/));
      this.router.navigate(['api/portfolio']);
    })
  }
  
  //2DA OPCION
  /*onLogin(event:Event){
    event.preventDefault;
    this.loginUsuario=new LoginUsuario(this.email, this.password);
    this.autenticacionService.login(this.loginUsuario).subscribe(data=>{
      this.isLogged=true;
      this.isLogginFail=false;
      this.tokenService.setToken(data.token);
      this.tokenService.setEmail(data.email);
      this.router.navigate([''])
    }, err =>{
      this.isLogged=false;
      this.isLogginFail=true;
      this.errorMsj=err.console.error.mensaje;
      console.log(this.errorMsj);      
    })
  }
  */

}

/*function accessToken(accessToken: any) {
  throw new Error('Function not implemented.');
}*/
