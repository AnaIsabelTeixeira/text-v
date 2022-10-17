//https://editor.p5js.org/limecrate/sketches/0_k1aHIOu
//https://p5js.org/examples/objects-array-of-objects.html

let shape1 = [];
let shape2 = [];
let shape3 = [];
let shape4 = [];
let mouseDistance;
let img;
let imgX;
let imgY;

function preload() {
  img = loadImage("trace_2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  textSize(120);
  textFont('Helvetica');

  for (let i = 0; i < 30; i++) {
    shape1.push(new EllipseClass());
    shape2.push(new RectClass());
    shape3.push(new StarClass());
  }
}

function draw() {
  background(235);
  //fill(235);
  //text('Verges', 10, 130);
  //colorMode(HSB, 100);
  //imgX  = (-15) + random(-0.3, 0.3);
  //imgY = (-25) + random(-0.3, 0.3);
  //image(img, -15, -25);
  //img.resize(height*1.7, height);
  fill(255,0,0);
  noStroke();
  //noFill();
  //stroke(255,0,0);
  for (let i = 0; i < shape1.length; i++) {
    shape1[i].move();
    shape1[i].display();
  }
  for (let i = 0; i < shape2.length; i++) {
    shape2[i].move();
    shape2[i].display();
  }
  for (let i = 0; i < shape3.length; i++) {
    shape3[i].move();
    shape3[i].display();
  }
}

class EllipseClass {
  constructor() {
    this.diameter = random(10, 200);
    this.speed = random(-1, 1);
    this.x = random(this.diameter, width-this.diameter);
    this.y = random(this.diameter, height-this.diameter);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    mouseDistance = int(dist(this.x, this.y, mouseX, mouseY));

    if (mouseDistance <= 160) { 
        this.x = mouseX+(this.x-mouseX)*1.2;
        this.y = mouseY+(this.y-mouseY)*1.2;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

class RectClass {
  constructor() {
    this.diameter = random(25, 300);
    this.diameter2 = random(50, 300);
    this.x = random(this.diameter, width-this.diameter);
    this.y = random(this.diameter, height-this.diameter);
    this.speed = random(-1, 1);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    mouseDistance = int(dist(this.x, this.y, mouseX, mouseY));

    if (mouseDistance <= 160) { 
        this.x = mouseX+(this.x-mouseX)*1.2;
        this.y = mouseY+(this.y-mouseY)*1.2;
    }

  }

  display() {
    rectMode(CENTER);
    rect(this.x, this.y, this.diameter, this.diameter2);
  }
}

class StarClass {
  constructor() {
    //this.col = (random(0, 100));
    this.diameter = random(25, 300);
    this.x = random(this.diameter, width-this.diameter);
    this.y = random(this.diameter, height-this.diameter);
    this.speed = random(-1, 1);
    this.npoints = random(40, 100);
    this.randomJitter = random(-2, 2);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    mouseDistance = int(dist(this.x, this.y, mouseX, mouseY));

    if (mouseDistance <= 160) { 
        this.x = mouseX+(this.x-mouseX)*1.2;
        this.y = mouseY+(this.y-mouseY)*1.2;
    }
  }

  display() {
    //fill(this.col, 100, 100);
    star(this.x, this.y, this.diameter/3, this.diameter, this.npoints);
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
