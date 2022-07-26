import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NEducacionComponent } from './components/educacion/n-educacion.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {path:'api/portfolio', component:PortfolioComponent,/* canActivate:[GuardGuard]*/},//ver si se puede ver sin editar sacando el guard
  {path: 'api/login',component:IniciarSesionComponent},
  {path: '',redirectTo:'api/portfolio', pathMatch: 'full'},
  {path:'api/portfolio/estudio/crear', component:NEducacionComponent, canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }