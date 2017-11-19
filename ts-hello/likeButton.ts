export class likeComponent {

    constructor(private _numberOfLikes?:number, private Isliked?:boolean ){

    }
    
    numberOfLikes () {

        return this._numberOfLikes;

    }

    clickLike  ()  {
       
       
      this._numberOfLikes += (this.Isliked) ? -1 : 1;
      this.Isliked = !this.Isliked;

    }

    displayLikes () { 
        console.log("There are currently " + this._numberOfLikes +  ". It appears you like this" );

    }

}

    




