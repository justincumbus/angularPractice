import {likeComponent} from "./likeButton"


let component = new likeComponent(50, true);


component.clickLike();
component.displayLikes();
console.log( `likesCount:  ${component.numberOfLikes} ` );