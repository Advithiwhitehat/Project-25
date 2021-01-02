class Box{
    constructor(x,y)
        {
            this.x=x;
            this.y=y;
            this.dustbinWidth=175;
            this.dustbinHeight=200;
            this.wallThickness=20;
            this.middleBodyHeight=100
            this.angle=0;	
            
            this.middleBody=Bodies.rectangle(this.x, this.y-100, this.wallThickness, this.middleBodyHeight, {isStatic:true});
            this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
            this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
            Matter.Body.setAngle(this.leftWallBody, this.angle);
            
    
            this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
            Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

            this.Dimage=loadImage("dustbinImg.png")
            World.add(world, this.bottomBody)
            World.add(world, this.leftWallBody)
            World.add(world, this.rightWallBody);
    
        }
        display()
        {
                var posBottom=this.bottomBody.position;
                var posLeft=this.leftWallBody.position;
                var posRight=this.rightWallBody.position;
                var posMiddle=this.middleBody.position;

                push()
                translate(posMiddle.x, posMiddle.y);
                rectMode(CENTER)
                //strokeWeight(4);
                angleMode(RADIANS)
                fill(255)
                stroke(255)
                rotate(this.angle)
                rect(0,0,this.wallThickness, this.dustbinHeight);
                imageMode(CENTER);
                image(this.Dimage, 0, 0, 180, 180);
                pop()                
    
                
    
                push()
                translate(posLeft.x, posLeft.y);
                rectMode(CENTER)
                //strokeWeight(4);
                angleMode(RADIANS)
                fill(255)
                stroke(255)
                rotate(this.angle)
                rect(0,0,this.wallThickness, this.dustbinHeight);
                pop()
    
                push()
                translate(posRight.x, posRight.y);
                rectMode(CENTER)
                //strokeWeight(4);
                stroke(255)
                angleMode(RADIANS)
                fill(255)
                rotate(-1*this.angle)
                rect(0,0,this.wallThickness, this.dustbinHeight);
                pop()
    
                push()
                translate(posBottom.x, posBottom.y);
                rectMode(CENTER)
                //strokeWeight(4);
                stroke(255)
                angleMode(RADIANS)
                fill(255)
                rect(0,0,this.dustbinWidth, this.wallThickness);
                pop()
                
        }
    
    }