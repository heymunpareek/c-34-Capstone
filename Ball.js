class Ball {
    constructor(x,y) {
        var op={
            restitution: 0.5,
            frictionAir: 0.005, 
            density: 3
        }
        this.body = Bodies.circle(x,y,30,op);
        this.radius = 30;
        World.add(world, this.body);

    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill("red");
        stroke("black");
        strokeWeight(2);
        circle(0,0,this.radius*2)
        pop();
    }
}