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
    RokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
