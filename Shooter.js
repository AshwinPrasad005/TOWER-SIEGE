class Shooter{
    constructor(x,y,radius){
        var options = {
            density:1.0,
            friction:0.3,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}