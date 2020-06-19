class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraints.create(options);
        World.add(world, this.sling);
    }

    display(){
        strokeWeight(3);
        fill("white");
        if(this.sling.bodyA>100){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            }
            else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30);
                line(pointA.x+25, pointA.y, pointB.x-30, pointB.y-3);
            }
        } 
    }
    attach(obj1){
        this.sling.bodyA = obj1;
    }
    fly(){
        this.sling.bodyA = null;
    }
}