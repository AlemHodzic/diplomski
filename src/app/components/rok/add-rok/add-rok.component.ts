import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServisiService } from 'src/app/services/servisi.service';
@Component({
  selector: 'app-add-rok',
  templateUrl: './add-rok.component.html',
  styleUrls: ['./add-rok.component.css']
})
export class AddRokComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  constructor(public service: ServisiService) { }

  formdata: any;
  profesori: any;
  predmeti: any;
  godine: any;
  ngOnInit(): void {
    this.service.getPredmeti().subscribe(
      res=> {
        this.predmeti = res as []
      } 
    )
    this.formdata = new FormGroup({
      datum_otvaranja: new FormControl(""),
      datum_zatvaranja:  new FormControl(""),
      br_ucionice: new FormControl(""),
      predmet_id:  new FormControl("")
   });
  }
  onClickSubmit(data) {
    console.log(data);
    this.service.addRok(data);
  }
  selectChangeHandler(event){
      console.log(event.target.value);
    
  }
}
