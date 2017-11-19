import { MovieNameComponent } from './../movie-name/movie-name.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})


export class CourseFormComponent implements OnInit {

    public Categories: Categories[] = [
    {id: 1, name: 'art'},
    {id: 2, name: 'science'},
    {id: 3, name: 'math'}
  ];



  constructor() { }




  ngOnInit() {
  }

  submit(form){
    console.log(form);
  }
  log(courseName){
    console.log(courseName);
  }


}

export interface Categories  {
  id: number;
  name: String;
}



