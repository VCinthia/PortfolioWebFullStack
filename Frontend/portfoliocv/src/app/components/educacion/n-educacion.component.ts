import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { EducacionComponent } from './educacion.component';

@Component({
  selector: 'app-n-educacion',
  templateUrl: './n-educacion.component.html',
  styleUrls: ['./n-educacion.component.css']
})
export class NEducacionComponent implements OnInit {
  constructor(private datosPortfolio:PortfolioService, private estudioList:EducacionComponent) { }

  ngOnInit(): void {    
  }
}
