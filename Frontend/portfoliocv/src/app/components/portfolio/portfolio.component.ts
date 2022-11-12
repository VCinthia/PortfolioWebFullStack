import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //url:string="https://cvportfolioap.herokuapp.com/api/"
  url : string = "https://vcinthia-aplicacionjava-production.up.railway.app/api/"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("portfolio component");    
    return this.http.get<any>(this.url+"persona");
  }

  ngOnInit(): void {
  }

}
