import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `<span [ngClass]="{'glyphicon-star' : isFavorite ===true, 'glyphicon-star-empty' : isFavorite === false}"  (click)='makeFavorite()' class='glyphicon' >   </span>`,
  styleUrls: ['./favorite.component.css'],


})
export class FavoriteComponent implements OnInit {
  @Output('change') Somechange = new EventEmitter();

  @Input('isfavorite') isFavorite: boolean;
  makeFavorite(){
    this.isFavorite = !this.isFavorite;
    this.Somechange.emit({newValue: this.isFavorite});
  }
  constructor() { }

  ngOnInit() {
  }

}

export interface favoriteChangedEventArgs {
  newValue: boolean
}
