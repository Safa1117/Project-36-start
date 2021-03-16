class food {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.foodStock;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/JJFood.png");
      World.add(world, this.body);
    }
    getFoodStock(){

    }
    deductFoodStock(){

    }
    updateFoodStock(){
        
    }
    display(){
        push();
        var pos =this.body.position;
        
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
        image(this.image, 0, 0, 0, 0);
        imageMode(CENTER);
        rectMode(CENTER);
        pop();
      
    }
  };