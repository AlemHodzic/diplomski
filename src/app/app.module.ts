import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentiComponent } from './items/studenti/studenti.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ProfesorComponent } from './items/profesor/profesor.component';
import { AddProfesorComponent } from './components/add-profesor/add-profesor.component';
import { EditProfesorComponent } from './components/edit-profesor/edit-profesor.component';
import { PredmetiComponent } from './items/predmeti/predmeti.component';
import { AddPredmetComponent } from './components/add-predmet/add-predmet.component';
import { EditPredmetComponent } from './components/edit-predmet/edit-predmet.component';
import { RokComponent } from './items/rok/rok.component';
import { AddRokComponent } from './components/rok/add-rok/add-rok.component';
import { EditRokComponent } from './components/rok/edit-rok/edit-rok.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginModule } from './shared/login/login.module';
import { ObavijestiComponent } from './items/obavijesti/obavijesti.component';
import { AddObavijestComponent } from './components/obavijest/add-obavijest/add-obavijest.component';
import { EditObavijestComponent } from './components/obavijest/edit-obavijest/edit-obavijest.component';
import { AktuelnostiComponent } from './items/aktuelnosti/aktuelnosti.component';
import { LandingComponent } from './items/landing/landing.component';
import { SingleNovostComponent } from './items/single-novost/single-novost.component';
import { PrijavljeniComponent } from './items/prijavljeni/prijavljeni.component';
import { OcjeneComponent } from './items/ocjene/ocjene.component';
import { AddOcjeneComponent } from './components/ocjene/add-ocjene/add-ocjene.component';
import { EditOcjeneComponent } from './components/ocjene/edit-ocjene/edit-ocjene.component';


@NgModule({
  declarations: [

    AppComponent,
    DashboardComponent,
    StudentiComponent,
    AddStudentComponent,
    EditStudentComponent,
    ProfesorComponent,
    AddProfesorComponent,
    EditProfesorComponent,
    PredmetiComponent,
    AddPredmetComponent,
    EditPredmetComponent,
    RokComponent,
    AddRokComponent,
    EditRokComponent,
    ObavijestiComponent,
    AddObavijestComponent,
    EditObavijestComponent,
    AktuelnostiComponent,
    LandingComponent,
    SingleNovostComponent,
    PrijavljeniComponent,
    OcjeneComponent,
    AddOcjeneComponent,
    EditOcjeneComponent,

  ],
  imports: [   
    LoginModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
