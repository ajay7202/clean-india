class BaseClass{
    constructor(x,y,width,height) {
        var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(820,344,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        //this.image = loadImage("dustbingreen.png");
    image(this.image,670,310, this.width, this.height);
      super.display;
      }
     
};