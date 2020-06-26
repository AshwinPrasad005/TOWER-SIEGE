class Shooter extends BaseClass {
    constructor(x,y,radius){
        super(x,y,options);
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        super.display();
        ellipseMode(CENTER);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}