class Poly {
    constructor(x,y,radius) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("polygon.jpg")
      World.add(world, this.body);

     // slingshot = new SlingShot(this.body,{x:100,y:200});
    }
    display(){
      var pos =this.body.position;
      push();
      //rectMode(CENTER);
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      //fill("brown");
      //rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius,this.radius);
      pop();
    }
  };