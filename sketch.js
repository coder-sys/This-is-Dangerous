const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
let i = 0
let database = firebase.database()
var formobj = new Form()
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  formobj.input()
}