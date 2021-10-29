import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ObavijestiComponent } from './items/obavijesti/obavijesti.component';
import { PredmetiComponent } from './items/predmeti/predmeti.component';
import { ProfesorComponent } from './items/profesor/profesor.component';
import { RokComponent } from './items/rok/rok.component';
import { StudentiComponent } from './items/studenti/studenti.component';

const routes: Routes = [
  { path: 'studenti', component: StudentiComponent},
  { path: 'profesori', component: ProfesorComponent},
  { path: 'predmeti', component: PredmetiComponent},
  { path: 'rokovi', component: RokComponent},
  { path: 'obavijesti', component: ObavijestiComponent},
  { path: 'login-module', loadChildren:()=> import('../app/shared/login/login.module').then(mod=>mod.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
