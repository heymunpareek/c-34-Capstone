class Chain {
    constructor(bodya, pointB) {
        var op={
            bodyA: bodya,
            pointB: pointB,
            stiffness: 0.4,
            length: 270

        }
        this.chain = Matter.Constraint.create(op);
        this.pointB = pointB,
        this.bodyA = bodya;
        World.add(world, this.chain);

    }
    display() {
        var ba = this.bodyA.position;
        var pb = this.pointB;
        push();
        stroke("black");
        strokeWeight(1.5);
        line(ba.x, ba.y - 25, pb.x, pb.y);
        pop();
    }
}