import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServisiService {

  constructor(private http: HttpClient) {

   }
   url = 'http://localhost:5000';
  
   getStudents(){
     return this.http.get(`${this.url}/getStudents`)
   }
   getStudent(id){
     return this.http.get(`${this.url}/getStudent/${id}`);
   }
   addStudent(object){
    this.http.post(this.url, object).subscribe(
      res => {
        console.log(res);
      }
    );
    window.location.reload();
   }
   updateStudent(object){
     this.http.put(this.url, object).subscribe(
       res=> {
         console.log(res);
       }
     );
     window.location.reload();
   }
   deleteStudent(object){
    this.http.put(`${this.url}/archiveStudent`, object).subscribe(
      res=> {
        console.log(res);
      }
    );
    window.location.reload();
  }



  //PROFESOR DIO

   getProfesors(){
    return this.http.get(`${this.url}/getProfesors`)
  }
  getProfesor(id){
    return this.http.get(`${this.url}/getProfesor/${id}`);
  }
  addProfesor(object){
    console.log(object)
    this.http.post(`${this.url}/profesor`, object).subscribe(
      res => {
        console.log(res);
      }
    );
    window.location.reload();
  }
  updateProfesor(object){
    this.http.put(`${this.url}/profesor`, object).subscribe(
      res=> {
        console.log(res);
      }
    );
    window.location.reload();
  }
  deleteProfesor(object){
    this.http.put(`${this.url}/archiveProfesor`, object).subscribe(
      res=> {
        console.log(res);
      }
    );
    window.location.reload();
  }
  //GODINE
  getGodine(){
    return this.http.get(`${this.url}/getGodine`)
  }
  //ODSJEK
  getOdsjek(){
    return this.http.get(`${this.url}/getOdsjek`)
  }
  //PREDMETI
  getPredmeti(){
    return this.http.get(`${this.url}/getPredmets`)
  }
  addPredmet(object){
    console.log(object)
    this.http.post(`${this.url}/predmet`, object).subscribe(
      res => {
        console.log(res);
      }
    );
    window.location.reload();
  }
  getPredmet(id){
    return this.http.get(`${this.url}/getPredmet/${id}`);
  }
  updatePredmet(object){
    this.http.put(`${this.url}/predmet`, object).subscribe(
      res=> {
        console.log(res);
      }
    );
    window.location.reload();
  }
  deletePredmet(object){
    console.log(object)
    this.http.put(`${this.url}/archivePredmet`, object).subscribe(
      res=> {
        console.log(res);
      }
    );
    //window.location.reload();
  }

  //ROKOVI

  getRokovi(){
    return this.http.get(`${this.url}/getRokovi`)
  }

}
