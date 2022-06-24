class Piratas_do_caribean {
    constructor(x,y,width,height,boatPos,boatAnimation){
        this.animation = boatAnimation;
        this.speed = 0.05;
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/jack_sparrow.png");
        this.boatPosition = boatPos
        this.isBroken = false;
       World.add(world,this.body);
    }
    animate(){
        this.speed += 0.05;

    }
    remove(index){
        this.animation = brokenAnimation;
        this.speed = 0.05;
        this.width = 300;
        this.length = 300;
        this.isBroken = true;
        setTimeout(() => {Matter.World.remove(world,foda_se[index].body);
        delete foda_se[index];}, 2000)
    }
show() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length)
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index],0,this.boatPosition,this.width,this.height);
    pop();
}

}