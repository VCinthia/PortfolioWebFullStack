import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skills } from 'interfaces';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsList: Skills[] =[];
  isUserLogged: Boolean = false;
  
  skillsForm: FormGroup;
  
  constructor(
    private datosPortfolio:PortfolioService, 
    private autenticacion: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.skillsForm = this.formBuilder.group({
        id: [''],
        porcentaje: ['', [Validators.required]],
        nombre: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
    this.isUserLogged = this.autenticacion.isUserLogged();
    this.reloadData();
  }

  private reloadData(){
    this.datosPortfolio.obtenerDatosSkill().subscribe(
      (data)=>{
        this.skillsList = data;
    });
  }

  private clearForm(){
    this.skillsForm.setValue({
      id: '',
      porcentaje: '', 
      nombre: '',
    });
  }

  private loadForm(skills: Skills){
    this.skillsForm.setValue({
      id: skills.id,
      porcentaje: skills.porcentaje, 
      nombre: skills.nombre,
    })
  }

  onSubmit() {    
    //console.log(this.skillsForm.value);
    let skills:Skills = this.skillsForm.value;
    if (this.skillsForm.get('id')?.value == ''){
      this.datosPortfolio.crearDatosSkill(skills).subscribe(
        (nuevoSkills: Skills)=>{
          this.skillsList.push(nuevoSkills);
        }
      ); 
    }else{
      this.datosPortfolio.editarDatosSkill(skills).subscribe(
        ()=>{
        this.reloadData();
      })
    }     
  }

  onNuevaSkill(){
    this.clearForm();
  }

  onEditarSkill(index: number){
    let skills: Skills = this.skillsList[index];
    this.loadForm(skills);    
  }

  onEliminarSkill(index: number){
    let skills: Skills = this.skillsList[index];
    if(confirm("¿Está seguro que desea borrar la skill?")){
      this.datosPortfolio.eliminarDatosSkill(skills.id).subscribe(()=>{
        this.reloadData();
      })
    }
  }  
}

