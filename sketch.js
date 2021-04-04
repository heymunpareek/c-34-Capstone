

//const
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

//variables
var engine, world;
var ground1;
var b1,b2,b3,b4,b5;
var b6, b7, b8, b9, b10;
var b11,b12,b13,b14,b15;
var b16, b17, b18, b19, b20;
var ball;
var chain;

function preload() {
    
}

function setup() {
    createCanvas(3000,800)
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(1500,700,3000,25);
    ball = new Ball(870,300);
    chain = new Chain(ball.body, {x: 870, y: 300})

    b1 = new Block(1000,200);
    b2 = new Block(1000,200);
    b3 = new Block(1000,200);
    b4 = new Block(1000,200);
    b5 = new Block(1000,200);

    
    b6 = new Block(1000,200);
    b7 = new Block(1000,200);
    b8 = new Block(1000,200);
    b9 = new Block(1000,200);
    b10 = new Block(1000,200);

    //2nd block


    b11 = new Block(1050,200);
    b12 = new Block(1050,200);
    b13 = new Block(1050,200);
    b14 = new Block(1050,200);
    b15 = new Block(1050,200);

    
    b16 = new Block(1050,200);
    b17 = new Block(1050,200);
    b18 = new Block(1050,200);
    b19 = new Block(1050,200);
    b20 = new Block(1050,200);
    

}
function draw() {    
    background("white");
    Engine.update(engine);

    ground1.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    ball.display();
    chain.display();
    b6.display();b7.display();b8.display();b9.display();b10.display();
    b11.display();b12.display();b13.display();b14.display();b15.display();b16.display();b17.display();b18.display();b19.display();b20.display();
    //console.log(b1.body.position.x);
    if(b1.body.position.x !== 1000) {
        push()
        textAlign(CENTER);
        fill("black");
        stroke("black");
        strokeWeight(3);
        textSize(35);
        text("YOU HAVE DESTROYED THE BUILDING!", 1500, 400);


        pop();
    }
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
   
}