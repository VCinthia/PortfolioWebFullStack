import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideRoutes, Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
  
})

export class IniciarSesionComponent implements OnInit {
  
  
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private router: Router) { 
    this.form=this.formBuilder.group(
      {
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],        
      }
    )
  }

  ngOnInit(): void {    
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
      console.log("DATA:" + JSON.stringify(data));
      this.router.navigate(['api/portfolio']);
    })
  }
  
}
