class Paper{
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.circle(x, y,20, options);
      this.width =33;
      this.image = loadImage("ball.png");
      World.add(world, this.body);
    }
    display(){
  
      var pos =this.body.position;
      push ();
      translate(pos.x, pos.y);
      rotate(this.body.angle);

      ellipseMode(RADIUS);
      //imageMode(CENTER);
     
      
      //ellipse(pos.x,pos.y, 20,20);
      image (this.image,0,0,30,30);
      
      pop ();
    }
  }