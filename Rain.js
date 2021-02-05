class Rain{
  constructor(x, y, r) {
      var options = {
          'restitution':0.1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }

    reset(){

      if(this.body.position.y > height){

        Matter.Body.setPosition(this.body, {x: random(0,400) , y: 0});
  
      }
    }

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("blue");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
}