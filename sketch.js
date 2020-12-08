const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform, block1;
var slingshot, polyObj;
var score=0;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(580,290,60,40);
    block2 = new Block(640,290,60,40);
    block3 = new Block(700,290,60,40);
    block4 = new Block(760,290,60,40);
    block5 = new Block(820,290,60,40);

    block6 = new Block(640,250,60,40);
    block7 = new Block(700,250,60,40);
    block8 = new Block(760,250,60,40);

    block9 = new Block(700,210,60,40);

    block10 = new Block(999,145,66,40)
    block11 = new Block(1065,145,66,40)
    block12 = new Block(1131,145,66,40)

    block13 = new Block(1065,105,66,40)

    platform = new Ground(700,300,305,10)
    platform1 = new Ground(1065,155,203,10)
    grnd = new Ground(600,600,1200,20)

    polyObj = new Poly(50,300,130);




    slingshot = new SlingShot(polyObj.body,{x:100, y:200});

}
function draw(){
    background("black");
    fill("white");
    text("SCORE :"+score,750,40)
    Engine.update(engine);
    strokeWeight(4);
    text(mouseX+","+mouseY,mouseX,mouseY);

    fill("orange")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    fill("purple")
    block6.display();
    block7.display();
    block8.display();
    block10.display();
    block11.display();
    block12.display();
    fill("blue")
    block13.display();
    block9.display();
    platform.display();
    platform1.display();
    polyObj.display();
    slingshot.display();
    //console.log(slingshot);
    grnd.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(polyObj.body,{x:50,y:300});
        slingshot.attach(polyObj.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polyObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}