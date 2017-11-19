import { favoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post =
  {
    title: 'Title',
    isFavorite: false
  }

  likedStats =
  {
    numberOfLikes: 55,
    likedByCurrentUser: true,
  }

  viewMode = 'map';


  courses = [];

  onFavoriteChanged(eventArgs: favoriteChangedEventArgs  ) {
    console.log('Favorite changed' + ' ' + eventArgs.newValue );
  }
}
