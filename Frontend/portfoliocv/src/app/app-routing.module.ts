import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {path:'api/portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path: 'api/login',component:IniciarSesionComponent},
  {path: '',redirectTo:'api/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
