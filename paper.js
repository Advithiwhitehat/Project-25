class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 5
        } 
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        this.image = loadImage("paperImg.png");

        World.add(world, this.body);
      }
      display(){
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill(170);
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image, 0, 0, 80, 80);
        pop();
      }
}