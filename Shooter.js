class Shooter {
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            density:0.3,
            friction:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}