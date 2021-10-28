import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServisiService } from 'src/app/services/servisi.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  formdata: any;
  student: any;
  soft = false;
  proiz = false;
  grad = false;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      ime: new FormControl(""),
      prezime: new FormControl(""),
      JMBG:  new FormControl(""),
      sifra:  new FormControl(""),
      email:  new FormControl(""),
      student_indeks: new FormControl(""),
      odsjek_id:  new FormControl("")
   });

   console.log(this.data);
   this.service.getStudent(this.data.id).subscribe(
    res => {
      this.student = res[0];
      this.formdata.get('ime').setValue(this.student.ime)
      this.formdata.get('prezime').setValue(this.student.prezime)
      this.formdata.get('JMBG').setValue(this.student.JMBG)
      this.formdata.get('sifra').setValue(this.student.sifra)
      this.formdata.get('email').setValue(this.student.email)
      this.formdata.get('student_indeks').setValue(this.student.student_indeks)
      this.formdata.get('odsjek_id').setValue(this.student.odsjek_id.toString())
      console.log(this.student)
    }
  )

  }
  onClickSubmit(data) {
    data.odsjek_id = +data.odsjek_id
    this.service.updateStudent(data);
  }

}
