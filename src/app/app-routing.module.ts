import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginContainerComponent } from './componentes/login/login-container/login-container.component';
import { RegistroContainerComponent } from './componentes/registro/registro-container/registro-container.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AltaTurnoContainerComponent } from './componentes/alta-turno/alta-turno-container/alta-turno-container.component';
import { ListadoTurnosContainerComponent } from './componentes/listado-turnos/listado-turnos-container/listado-turnos-container.component';
import { ListadoEspecialistaContainerComponent } from './componentes/listado-especialista/listado-especialista-container/listado-especialista-container.component';
import { DiagnosticoContainerComponent } from './componentes/diagnostico/diagnostico-container/diagnostico-container.component';
import { EncuestaContainerComponent } from './componentes/encuesta/encuesta-container/encuesta-container.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoggedGuard } from './guards/logged/logged.guard';

const routes: Routes = [
  {path:'login', component:LoginContainerComponent},
  {path:'', redirectTo:'/login', pathMatch: 'full'},
  {path:'registro', component:RegistroContainerComponent},
  {path:'nav', component:NavComponent, canActivate: [LoggedGuard]},
  {path:'pedir-turno', component:AltaTurnoContainerComponent, canActivate: [LoggedGuard]},
  {path:'listado-turnos', component:ListadoTurnosContainerComponent, canActivate: [LoggedGuard]},
  {path:'listado-especialista', component:ListadoEspecialistaContainerComponent, canActivate: [LoggedGuard]},
  {path:'diagnostico/:id', component:DiagnosticoContainerComponent, canActivate: [LoggedGuard]},
  {path:'encuesta/:id', component:EncuestaContainerComponent, canActivate: [LoggedGuard]},
  {path:'home', component:HomeComponent, canActivate: [LoggedGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
