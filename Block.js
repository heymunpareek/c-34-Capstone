class Block{
    constructor(x, y) {
        var op={
            restitution: 0.5,
            friction: 1,
            density: 2
        }
        this.body = Bodies.rectangle(x,y,50,50,op)
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
         
        
    }
    display() {
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("green");        
        strokeWeight(2);
        stroke("black");
        rectMode(CENTER);
        rect(0,0,this.width, this.height)
        pop()      

       
    }
}