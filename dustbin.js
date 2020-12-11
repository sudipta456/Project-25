class Dustbin{
    constructor() {
      var options = {
         'isStatic':true,
      }
      this.body1 = Bodies.rectangle(930,300,20,150 ,options);
      this.width1 = 20;
      this.height1 = 150;
      World.add(world, this.body1);

      this.body2 = Bodies.rectangle(1070,300,20,150 ,options);
      this.width2 = 20;
      this.height2 = 150;
      World.add(world, this.body2);

      this.body3 = Bodies.rectangle(1000,360,120,20 ,options);
      this.width3= 120;
      this.height3 = 20;
      World.add(world, this.body3);
      this.image = loadImage("dustbin.png");
    }
    display(){

      push();
      translate(this.body3.position.x, this.body3.position.y);
      rotate(this.body3.angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width3, this.height3);
      pop();
      
      push();
      translate(this.body1.position.x, this.body1.position.y);
      rotate(this.body1.angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width1, this.height1);
      pop();

      push();
      translate(this.body2.position.x, this.body2.position.y);
      rotate(this.body2.angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width2, this.height2);
      imageMode (CENTER);
      image (this.image,-70,-10,150,200);
      pop();

      
    }
  }