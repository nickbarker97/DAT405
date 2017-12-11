//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405


let size=150;
let r = (255);
let g = (255);
let b = (255);
let angle = 0;

function setup() {

  var canvas = createCanvas(594,841);
  canvas.parent('sketchcontainer');
  x = 0;
  y = 0;
  frameRate(10);
}

function draw() {



  //the code for the triangles
  for (var l = 0; l < 10 ; l++) {
    stroke(r,g,b);
    strokeWeight(4);
    fill(r,g,b,);
    triangle(random(594),random(841),random(197,397),420,random(197,397),420);
    //this randomises the colours for all elements
    r = random(255);
    g = random(255);
    b = random(255);

  }

  angle += -0.1;

  let sinX = sin(angle);
  let cosY = cos(angle);
  // code to give location of x1 and y1
  let x1 = map(sinX, -1, 1, 0, width-45);
  let y1 = map(cosY, -1, 1, 0,height-50);

  //code the how the moving circle looks
  noStroke();
  fill(r,g,b);
  ellipse(15+x1, 30+y1, 75, 75);

  //corner triangle code
  //noStroke();
  //strokeWeight(3);
  //fill(r,g,b);
  //top right corner
  //triangle(594,0,594,100,494,0);
  //top left corner
  //triangle(0,0,0,100,100,0);
  //bottom right corner
  //triangle(594,841,594,741,494,841);
  //bottom left corner
  //triangle(0,841,0,741,100,841);


}
