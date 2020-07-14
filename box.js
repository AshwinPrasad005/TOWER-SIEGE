class Box extends BaseClass {
    constructor(x,y,width,height,options){
    super(x,y,width,height,options);
    this.image = loadImage("box.jpg");
    this.Visibility = 255;
    }
    display(){
        if(this.body.speed < 3){
        super.display();
        console.log(this.body.speed)
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            // tint(255,this.Visibility);
            imageMode(CENTER);
            image(this.image,this.body.position.x, this.body.position.y,25,25);
            pop();
        }
    }
};