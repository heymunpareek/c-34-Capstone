class BaseClass {
    constructor(x,y,width,height) {
        var op={
            
            restitution: 1,
            friction: 1,
            density: 1,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}