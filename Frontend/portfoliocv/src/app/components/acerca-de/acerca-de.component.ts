import { Component, OnInit } from '@angular/core';
//import { persona } from 'src/app/model/persona.model';
//import { PersonaService } from 'src/app/servicios/persona.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  miPortfolio: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPersona().subscribe(data =>{     
      this.miPortfolio= data[0]});//Poner el lugar del array que queremos que lea
  }

}
