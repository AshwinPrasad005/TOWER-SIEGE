class Shooter {
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            density:0.3,
            friction:1.0
        }
        this.image = loadImage("shooter.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        // var angle = this.body.angle;
        var pos =this.body.position;
        push();
        // translate(pos.x,pos.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width, this.height);
        pop();
    }
}