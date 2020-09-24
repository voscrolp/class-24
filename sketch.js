const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1,pig2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1 = new log(810,260,300,PI/2);
    pig1 = new Pig(810,320);

    //second row
    box3 = new Box(700,200,70,70);
    box4 = new Box(920,200,70,70);
    pig2 = new Pig(810,200);
    log2 = new log(810,170,300,PI/2);

    //third row
    box5 = new Box(810,100,70,70);
    log3 = new log(750,100,150,PI/6);
    log4 = new log(870,100,150,-PI/6);

    bird = new Bird(100,100);

    
    ground = new Ground(600,height,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(log2.body.position.y);

    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    //second row
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    //third row
    box5.display();
    log3.display();
    log4.display();

    bird.display();

    ground.display();
}