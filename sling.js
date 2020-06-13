class Sling{
    constructor(body1, point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.004,
            length: 5
        }
        this.sling = Constraints.create(options);
        World.add(world, this.sling);
    }

    display(){
        strokeWeight(3);
        stroke("black");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }
}