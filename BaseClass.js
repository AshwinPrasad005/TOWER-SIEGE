class BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            density:0.3,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.iamge = loadImage("box.jpg");
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}