import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'interfaces';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoList: Proyecto[] =[];
  isUserLogged: Boolean = false;
  
  proyectoForm: FormGroup;
  
  constructor(
    private datosPortfolio:PortfolioService, 
    private autenticacion: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.proyectoForm = this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required]],
        imagen: ['', [Validators.required]],
        url: ['', [Validators.required]],
        descripcion: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.isUserLogged = this.autenticacion.isUserLogged();
    this.reloadData();
  }

  private reloadData(){
    this.datosPortfolio.obtenerDatosProyecto().subscribe(
      (data)=>{
        this.proyectoList = data;
    });
  }

  private clearForm(){
    this.proyectoForm.setValue({
      id: '',
      institucion: '', 
      titulo: '',
      periodo: '',
      descripcion: ''
    });
  }

  private loadForm(proyecto: Proyecto){
    this.proyectoForm.setValue({
      id: proyecto.id,
      nombre: proyecto.nombre, 
      imagen: proyecto.imagen,
      url: proyecto.url,
      descripcion: proyecto.descripcion
    })
  }

  onSubmit() {    
    //console.log(this.proyectoForm.value);
    let proyecto:Proyecto = this.proyectoForm.value;
    if (this.proyectoForm.get('id')?.value == ''){
      this.datosPortfolio.crearDatosProyecto(proyecto).subscribe(
        (nuevoProyecto: Proyecto)=>{
          this.proyectoList.push(nuevoProyecto);
          /* this.reloadData(); */
        }
      ); 
    }else{
      this.datosPortfolio.editarDatosProyecto(proyecto).subscribe(
        ()=>{
        this.reloadData();
      })
    }     
  }

  onNuevoProyecto(){
    this.clearForm();
  }

  onEditarProyecto(index: number){
    let proyecto: Proyecto = this.proyectoList[index];
    this.loadForm(proyecto);    
  }

  onEliminarProyecto(index: number){
    let proyecto: Proyecto = this.proyectoList[index];
    if(confirm("¿Está seguro que desea borrar el proyecto?")){
      this.datosPortfolio.eliminarDatosProyecto(proyecto.id).subscribe(()=>{
        this.reloadData();
      })
    }
  }  
}

