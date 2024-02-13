// ==
// ===
// ==== CREDITS TO ==== //

// JUSTIN BALKE. LINK: http://compform.net/parameters/
// DANIEL SHIFFMAN. LINK: https://natureofcode.com/book/chapter-1-vectors/

// ==== CREDITS TO ==== //
// ===
// ==

let dark = "#0a0a0a";
let pink = "#FFBDD8";
let white = "#f2f2f2";

let makeCanvas;
let hidden = true;
let bubbles = [];

function setup() {
  makeCanvas = createCanvas(windowWidth, windowHeight);
  makeCanvas.parent("sketch-bg");

  pixelDensity(1);

  frameRate(60);
  fill(217, 217, 217);
  noStroke();
  // blendMode(SCREEN);

  textFont("Arial");
  textSize(36);
  fill(0);

  //Make the Object in the array;
  for (let i = 0; i < 15; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  clear();

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].update();
  }

  myMouse(10, 150);
  myMouse(15, 25);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function myMouse(size, alpha) {
  fill(255, 246, 228, alpha);
  ellipse(mouseX, mouseY, size, size);
}

// CREDITS TO DANIEL SHIFFMAN
class Bubble {
  constructor() {
    this.diameter = random(5, 12);
    this.col = random();
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.maxSpeed = 8; // Ajust Speed
  }

  update() {
    this.mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(this.mouse, this.location);

    dir.normalize();

    dir.mult(0.5);

    let acceleration = dir;

    this.velocity.add(acceleration);
    this.velocity.limit(this.maxSpeed);
    this.location.add(this.velocity);
  }

  display() {
    noStroke();
    fill(dark);
    ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
  }

  checkEdges() {
    if (location.x > width) {
      location.x = 0;
    } else if (location.x < 0) {
      location.x = width;
    }
  }
}

//  CREDITS TO JUSTIN BLAKE
let hide_timeout = null;
let clear_timeout = null;

function mouseMoved() {
  updateTimers(1500);
}

function mousePressed() {
  updateTimers(4000);
}

function updateTimers(ms) {
  if (!makeCanvas) {
    return;
  }

  $(makeCanvas.canvas).removeClass("sketch-hide");

  hidden = false;
  loop();

  clearTimeout(hide_timeout);
  clearTimeout(clear_timeout);
  hide_timeout = setTimeout(() => {
    $(makeCanvas.canvas).addClass("sketch-hide");
  }, ms);
  clear_timeout = setTimeout(() => {
    clear();
    hidden = true;
    noLoop();
  }, ms + 1100);
}
