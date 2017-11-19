import { Component , Input, Output} from '@angular/core';

@Component(
  {
    selector: 'like',
    styleUrls: ['./likes.component.css'],
    template : `<span [ngClass]="{'liked' : liked === true, 'notLiked' : liked === false}"  (click)='toggleLike()' class='glyphicon glyphicon-heart' > {{numberOfLikes}}  </span>`,

  })
export class LikesComponent
{
    @Input('liked') liked = false;
    @Input('numberOfLikes') numberOfLikes = 0;


    toggleLike()
    {

        this.liked ? this.numberOfLikes-- : this.numberOfLikes++ ;
        this.liked = !this.liked;


    }







    constructor() { }



}
