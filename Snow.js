class Snow{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 1,
        }
        this.x = x
        this.y = y
        this.r= 50;
        
        this.snowFall = loadImage("snow4.webp");
        this.snowFall2 = loadImage("snow5.webp");
        this.body=Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }
    display() {

        // push();
        image(this.snowFall, 0, 0,this.r, this.r);
        image(this.snowFall2, 300, random(0, 800), this.r , this.r);


    imageMode(CENTER);
    }

}
