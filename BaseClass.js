class BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            density:0.3,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("box.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}