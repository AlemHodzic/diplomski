import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(public service: ServisiService) { }
  studentIme: any;
  formdata: any;
  ngOnInit() {
    this.formdata = new FormGroup({
      ime: new FormControl(""),
      prezime: new FormControl(""),
      JMBG:  new FormControl(""),
      sifra:  new FormControl(""),
      email:  new FormControl(""),
      student_indeks: new FormControl(""),
      odsjek_id:  new FormControl("")
   });
  }
  onClickSubmit(data) {
    data.odsjek_id = +data.odsjek_id
    this.service.addStudent(data);
  }

  }


