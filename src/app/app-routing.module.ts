import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './items/landing/landing.component';
import { ObavijestiComponent } from './items/obavijesti/obavijesti.component';
import { OcjeneComponent } from './items/ocjene/ocjene.component';
import { PredmetiComponent } from './items/predmeti/predmeti.component';
import { PrijavljeniComponent } from './items/prijavljeni/prijavljeni.component';
import { ProfesorComponent } from './items/profesor/profesor.component';
import { RokComponent } from './items/rok/rok.component';
import { SingleNovostComponent } from './items/single-novost/single-novost.component';
import { StudentiComponent } from './items/studenti/studenti.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'obavijest/:id', component: SingleNovostComponent},
  { path: 'studenti', component: StudentiComponent, canActivate: [AuthGuard]},
  { path: 'profesori', component: ProfesorComponent, canActivate: [AuthGuard]},
  { path: 'predmeti', component: PredmetiComponent},
  { path: 'rokovi', component: RokComponent},
  { path: 'obavijesti', component: ObavijestiComponent},
  { path: 'prijavljeni', component: PrijavljeniComponent},
  { path: 'ocjene', component: OcjeneComponent},
  { path: 'login-module', loadChildren:()=> import('../app/shared/login/login.module').then(mod=>mod.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
