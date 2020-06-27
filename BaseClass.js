class BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            density:0.3,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        pop();
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        push();
    }
}