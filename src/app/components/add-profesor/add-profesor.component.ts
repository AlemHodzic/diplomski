import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServisiService } from 'src/app/services/servisi.service';

@Component({
  selector: 'app-add-profesor',
  templateUrl: './add-profesor.component.html',
  styleUrls: ['./add-profesor.component.css']
})
export class AddProfesorComponent implements OnInit {

  constructor(public service: ServisiService) { }
  formdata: any;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      ime: new FormControl(""),
      prezime: new FormControl(""),
      JMBG:  new FormControl(""),
      sifra:  new FormControl(""),
      email:  new FormControl(""),
   });
  }
  onClickSubmit(data) {
    this.service.addProfesor(data);
  }

}
