class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        super(x,y,width,height,options)
    }
    display(){
       super.display();
       fill("brown");
    }
}