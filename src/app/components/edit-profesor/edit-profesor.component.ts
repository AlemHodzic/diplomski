import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServisiService } from 'src/app/services/servisi.service';
@Component({
  selector: 'app-edit-profesor',
  templateUrl: './edit-profesor.component.html',
  styleUrls: ['./edit-profesor.component.css']
})
export class EditProfesorComponent implements OnInit {

  constructor(public service: ServisiService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { }
  formdata: any;
  profesor: any;

  ngOnInit(): void {
    this.formdata = new FormGroup({
      ime: new FormControl(""),
      prezime: new FormControl(""),
      JMBG:  new FormControl(""),
      sifra:  new FormControl(""),
      email:  new FormControl("")
   });

   console.log(this.data.id);
   this.service.getProfesor(this.data.id).subscribe(
    res => {
      console.log(res)
      this.profesor = res[0];
      this.formdata.get('ime').setValue(this.profesor.ime)
      this.formdata.get('prezime').setValue(this.profesor.prezime)
      this.formdata.get('JMBG').setValue(this.profesor.JMBG)
      this.formdata.get('sifra').setValue(this.profesor.sifra)
      this.formdata.get('email').setValue(this.profesor.email)
      console.log(this.profesor)
    }
  )
  }
  onClickSubmit(data) {
    data.korisnik_id = this.data.id;
    this.service.updateProfesor(data);
  }

}
