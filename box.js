class Box{
    constructor(x,y,width,height){
        var options = {
            density:1.0,
            friction:0.3,
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        pop();
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);
        push();
    }
}