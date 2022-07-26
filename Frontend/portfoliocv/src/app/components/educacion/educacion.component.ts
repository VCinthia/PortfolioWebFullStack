import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  estudioList: any;  
  estudio: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosEducacion().subscribe(data=>{
      console.log(data+"data de educacion.components.ts todos los elementos");
      this.estudioList=data;
    })
  }
  creaEducacion(){
      this.datosPortfolio.crearDatosEducacion().subscribe(data=>{
      this.estudioList=data;      
    })
  }
}

