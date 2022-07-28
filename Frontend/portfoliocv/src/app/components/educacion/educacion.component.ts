import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import * as e from 'cors';
import { Estudio } from 'interfaces';//Necesario para leer los elementos de cada estudio
import { Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  estudioList: Estudio[] =[];
  isUserLogged: Boolean = false;
  
  educacionForm: FormGroup;
  
  constructor(
    private datosPortfolio:PortfolioService, 
    private autenticacion: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.educacionForm = this.formBuilder.group({
        id: [''],
        institucion: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        periodo: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.isUserLogged =this.autenticacion.isUserLogged();
    this.reloadData();
  }

  private reloadData(){
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data=>{
      //console.log(data+"data de educacion.components.ts traer todos los elementos");
      this.estudioList=data;
    });
  }

  private clearForm(){
    this.educacionForm.setValue({
      id: '',
      institucion: '', 
      titulo: '',
      periodo: '',
      descripcion: '',
    });
  }

  private loadForm(estudio: Estudio){
    this.educacionForm.setValue({
      id: estudio.id,
      institucion: estudio.institucion, 
      titulo: estudio.titulo,
      periodo: estudio.periodo,
      descripcion: estudio.descripcion,
    })
  }

  onSubmit() {    
    //console.log(this.educacionForm.value);
    let estudio:Estudio = this.educacionForm.value;
    if(this.educacionForm.get('id')?.value == ''){
      this.datosPortfolio.crearDatosEducacion(estudio).subscribe(
        (nuevoEstudio: Estudio)=>{
          this.estudioList.push(nuevoEstudio);
        }
      ); 
    }else{
      this.datosPortfolio.editarDatosEducacion(estudio).subscribe(
        ()=>{
        this.reloadData();
      })
    }     
  }

  onNuevaEducacion(){
    this.clearForm();
  }

  onEditarEducacion(index: number){
    console.log(index);
    let estudio: Estudio = this.estudioList[index];
    this.loadForm(estudio);
    
  }

  onEliminarEducacion(index: number){
    let estudio: Estudio = this.estudioList[index];
    if(confirm("¿Está seguro que desea borrar la educación?")){
      this.datosPortfolio.eliminarDatosEducacion(estudio.id).subscribe(()=>{
        this.reloadData();
      })
    }
  }
  
}

