class Box extends BaseClass {
    constructor(x,y,width,height){
    super(x,y,width,height);
    this.visibility = 255;
    }
    display(){
        fill("green");
        if(this.body.speed < 3){
        super.display();
        }
        else{
            World.remove(world, this.body);
            push();
            this.visiblity = this.visiblity - 5;
            tint(255,this.vsisiblity);
            rect(this.body.position.x, this.body.position.y,25,25);
            pop();
        }
    }
}