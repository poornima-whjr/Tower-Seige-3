class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.8
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tin.jpg");
        this.visibility=255;
         World.add(world, this.body);
    }
      display(){
          if(this.body.speed<3){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
          else{
            World.remove(world, this.body);
            if(this.visibility>0){
                push();
                this.visibility=this.visibility-60;
                tint(255,this.visibility);
                image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
                pop();
            }
          } 
      }
      score() {
        if(this.visibility<200 && this.visibility>0){
            score = score + 1;
        }
      }
    
      
}
