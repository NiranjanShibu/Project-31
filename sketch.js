const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy, umbrella;
var drops = [];
var drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8, drop9, drop10;
var drop11, drop12, drop13, drop14, drop15, drop16, drop17, drop18, drop19, drop20;
var thunder1, thunder2, thunder3, thunder4;

function preload() {
    boy = loadImage("sprites/walking_1.png");
    thunder1 = loadImage("sprites/1.png");
    thunder2 = loadImage("sprites/2.png");
    thunder3 = loadImage("sprites/3.png");
    thunder4 = loadImage("sprites/4.png");

}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    drop1 = new Rain(random(0,400), random(0, 200), 8);
    drop2 = new Rain(random(0,400), random(0, 200), 8);
    drop3 = new Rain(random(0,400), random(0, 200), 8);
    drop4 = new Rain(random(0,400), random(0, 200), 8);
    drop5 = new Rain(random(0,400), random(0, 200), 8);
    drop6 = new Rain(random(0,400), random(0, 200), 8);
    drop7 = new Rain(random(0,400), random(0, 200), 8);
    drop8 = new Rain(random(0,400), random(0, 200), 8);
    drop9 = new Rain(random(0,400), random(0, 200), 8);
    drop10 = new Rain(random(0,400), random(0, 200), 8);
    drop11 = new Rain(random(0,400), random(0, 200), 8);
    drop12 = new Rain(random(0,400), random(0, 200), 8);
    drop13 = new Rain(random(0,400), random(0, 200), 8);
    drop14 = new Rain(random(0,400), random(0, 200), 8);
    drop15 = new Rain(random(0,400), random(0, 200), 8);
    drop16 = new Rain(random(0,400), random(0, 200), 8);
    drop17 = new Rain(random(0,400), random(0, 200), 8);
    drop18 = new Rain(random(0,400), random(0, 200), 8);
    drop19 = new Rain(random(0,400), random(0, 200), 8);
    drop20 = new Rain(random(0,400), random(0, 200), 8);

    umbrella = new Umbrella(210, 430, 70);

}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);

    drop1.reset();
    drop2.reset();
    drop3.reset();
    drop4.reset();
    drop5.reset();
    drop6.reset();
    drop7.reset();
    drop8.reset();
    drop9.reset();
    drop10.reset();
    drop11.reset();
    drop12.reset();
    drop13.reset();
    drop14.reset();
    drop15.reset();
    drop16.reset();
    drop17.reset();
    drop18.reset();
    drop19.reset();
    drop20.reset();

    image(boy,50,326,300,300);

    drop1.display();
    drop2.display();
    drop3.display();
    drop4.display();
    drop5.display();
    drop6.display();
    drop7.display();
    drop8.display();
    drop9.display();
    drop10.display();
    drop11.display();
    drop12.display();
    drop13.display();
    drop14.display();
    drop15.display();
    drop16.display();
    drop17.display();
    drop18.display();
    drop19.display();
    drop20.display();

    createThunder();

}

function createThunder(){

rand = Math.round(random(1,4));
    if(frameCount%90===0){

        var thunderCreatedFrame = frameCount;

        if(rand === 1){

            image(thunder1,random(-50, 170),-25,300,300);

        }

        if(rand === 2){

            image(thunder2,random(-50, 170),-25,300,300);

        }

        if(rand === 3){

            image(thunder3,random(-50, 170),-25,300,300);

        }

        if(rand === 4){

            image(thunder4,random(-50, 170),-25,300,300);

        }

    }

}