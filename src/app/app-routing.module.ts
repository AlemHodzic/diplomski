import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PredmetiComponent } from './items/predmeti/predmeti.component';
import { ProfesorComponent } from './items/profesor/profesor.component';
import { RokComponent } from './items/rok/rok.component';
import { StudentiComponent } from './items/studenti/studenti.component';

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: 'studenti', component: StudentiComponent },
  { path: 'profesori', component: ProfesorComponent },
  { path: 'predmeti', component: PredmetiComponent },
  { path: 'rokovi', component: RokComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
