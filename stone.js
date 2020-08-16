class Stone {
    constructor(x,y, radius){    
    var options ={
        isStatic: false,
        restitution: 0,
        friction: 1.0,
        density: 1.2
     }
     this.radius = radius;
     this.x =x;
     this.y =y;
     this.image = loadImage("Images/stone.png");
     this.body = Bodies.circle(x,y,radius, options);
     World.add(world, this.body);
  }
  
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWeight(4);
    imageMode(CENTER); 
    image(this.image, 0 , 0, this.radius, this.radius)

    pop();  }
  };