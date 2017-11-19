class Point 
{   
    
    constructor(private x?:number, private y?:number)
    {
    }

   
   
    draw () 
    {
        console.log('X' + this.x + ', Y: ' + this.y);
    }

   get X(){
       return this.x
   }
   set X(value){

       if (value > 5000){
           throw new Error("X is too high");
       }
       this.x = value;
   }

}



let drawPoint = (point: Point)  => {
     //...


}


let point = new Point(5,4);
point.X = 4999;
console.log(point.X);
point.draw();