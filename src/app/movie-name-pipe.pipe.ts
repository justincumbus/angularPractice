import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieNamePipe'
})
export class MovieNamePipePipe implements PipeTransform {

  transform(movieName: string) {

//We'll ultimately return this formattedMovieName variable.
let formattedMovieName: string
const movieNameArray = movieName.split(' ');
  for (let i = 0; i < movieNameArray.length; i++) {
    //first if capitalizes the first word no matter what...
    if (i === 0) {
      movieNameArray[0] = movieNameArray[0].charAt(0).toUpperCase() + movieNameArray[0].substr(1, movieNameArray[0].length).toLowerCase();
      formattedMovieName = movieNameArray[0] + ' ';

      continue;
    }
    //now let's skip capitalizing the and of. Should refactor this later. It's quite long.
    if (movieNameArray[i] === 'the' || movieNameArray[i] === 'of' || movieNameArray[i] === 'on' ||  movieNameArray[i] === 'in' ||  movieNameArray[i] === 'with'  ) {
      formattedMovieName = formattedMovieName + movieNameArray[i] + ' ';
      continue;
    }
    // capitalize the first letter in each word
    movieNameArray[i] = movieNameArray[i].charAt(0).toUpperCase() + movieNameArray[i].substr(1, movieNameArray[i].length).toLowerCase();
    formattedMovieName = formattedMovieName + movieNameArray[i] + ' ';
  };
  return formattedMovieName;
}
}
