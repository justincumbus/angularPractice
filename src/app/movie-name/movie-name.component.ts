import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-name',
  template: `<input [(ngModel)]="movieName"  >
  {{movieName | movieNamePipe}}
  ` ,
  styleUrls: ['./movie-name.component.css']
})
export class MovieNameComponent implements OnInit {
movieName: string;
  constructor() { }

  ngOnInit() {
  }

}
