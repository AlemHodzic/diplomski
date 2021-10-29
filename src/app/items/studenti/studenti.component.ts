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
  ngOnInit(): void {
    console.log("aa")
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
