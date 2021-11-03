import { Component, OnInit } from '@angular/core';
import { ServisiService } from 'src/app/services/servisi.service';
import {MatDialog} from '@angular/material/dialog';
import { AddStudentComponent } from 'src/app/components/add-student/add-student.component';
import { EditStudentComponent } from 'src/app/components/edit-student/edit-student.component';

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog) { }
  students: any;
  admin: boolean = false;
  student: boolean = false;
  profesor: boolean = false;
  ngOnInit(): void {
    let personFromStorage = JSON.parse(localStorage.getItem('user'));
    if(personFromStorage[0].rola == "admin"){
      this.admin = true;
    }
    if(personFromStorage[0].rola == "student"){
      this.student = true;
    }
    if(personFromStorage[0].rola == "profesor"){
      this.profesor = true;
    }


    this.service.getStudents().subscribe(
      res=> {
        this.students = res as []
        this.students = this.students.filter(item => item.active == "yes");
    
      } 
    )
  }
  openDialog(){
    this.dialog.open(AddStudentComponent);
  }
  
  openEdit(item){
    this.dialog.open(EditStudentComponent, {
      data: {
        id: item
      }
    });

  }
  delete(object){
    const answer = window.confirm("Jeste li sigurni da zelite odabrani sadržaj izbrisati/prebaciti u arhivu?");
    if(answer){
      this.service.deleteStudent(object);
      setTimeout(() => {
        location.reload();
      }, 500);
    }
  }


}
