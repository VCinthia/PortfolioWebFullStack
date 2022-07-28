import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'interfaces';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: Experiencia[] =[];
  isUserLogged: Boolean = false;

  experienciaForm: FormGroup;

  constructor(
    private datosPortfolio:PortfolioService,
    private autenticacion: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.experienciaForm=this.formBuilder.group({
        id: [''],
        periodo: ['', [Validators.required]],
        puesto: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
      });
     }

  ngOnInit(): void {
    this.isUserLogged = this.autenticacion.isUserLogged();
    this.reloadData();
  }

  private reloadData(){
    this.datosPortfolio.obtenerDatosExperiencia().subscribe(
      (data)=>{
        this.experienciaList = data;
    });
  }

  private clearForm(){
    this.experienciaForm.setValue({
      id: '',
      periodo: '', 
      puesto: '',
      descripcion: ''
    });
  }

  private loadForm(experiencia: Experiencia){
    this.experienciaForm.setValue({
      id: experiencia.id,
      periodo: experiencia.periodo, 
      puesto: experiencia.puesto,
      descripcion: experiencia.descripcion
    })
  }

  onSubmit() {    
    //console.log(this.experienciaForm.value);
    let experiencia:Experiencia = this.experienciaForm.value;
    if (this.experienciaForm.get('id')?.value == ''){
      this.datosPortfolio.crearDatosExperiencia(experiencia).subscribe(
        (nuevaexperiencia: Experiencia)=>{
          this.experienciaList.push(nuevaexperiencia);
        }
      ); 
    }else{
      this.datosPortfolio.crearDatosExperiencia(experiencia).subscribe(
        ()=>{
        this.reloadData();
      })
    }     
  }

  onNuevaExperiencia(){
    this.clearForm();
  }

  onEditarExperiencia(index: number){
    let experiencia: Experiencia = this.experienciaList[index];
    this.loadForm(experiencia);    
  }

  onEliminarExperiencia(index: number){
    let experiencia: Experiencia = this.experienciaList[index];
    if(confirm("¿Está seguro que desea borrar la experiencia?")){
      this.datosPortfolio.eliminarDatosExperiencia(experiencia.id).subscribe(()=>{
        this.reloadData();
      })
    }
  }  
}
