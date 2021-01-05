var hr,mt,sd;
var hourAngle,minuteAngle,secondAngle;

function setup(){

  createCanvas(700,700);
  angleMode(DEGREES);

}

function draw(){

  background("lavender");  

  translate(350,350);
  rotate(-90);

  hr = hour();
  mt = minute();
  sd = second();

  secondAngle = map(sd,0,60,0,360);
  minuteAngle = map(mt,0,60,0,360);
  hourAngle = map(hr%12,0,12,0,360);

  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(hourAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  point(0,0);
  noFill();

  stroke("red"); 
  arc(0,0,320,320,0,secondAngle);

  stroke("green"); 
  arc(0,0,280,280,0,minuteAngle);

  stroke("blue"); 
  arc(0,0,240,240,0,hourAngle);

}