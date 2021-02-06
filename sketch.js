const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0);
  ground = new Ground(1500,400,30,50);
  hero = new Hero(200,600);
  fly = new Fly();

  ground.display();
  hero.dispaly();
  fly.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y:mouseY});
}
