// Position variables
  let circlePositionX; 
  let circlePositionY; 

// Speed variables
let circleSpeedX = 6;
let circleSpeedY = 7;

// Radius variable
let circleRadius = 15;

// Hue variable
let circleHue = 0;

function setup() {
  
  // Position variables
  circlePositionX = random(0,200);
  circlePositionY = random(201,400);
  
  // Create 400x400 canvas
  createCanvas(400, 400);

  // Cover canvas with white
  background(255);

  // Draw ellipses using their radius
  ellipseMode(RADIUS);

  // Draw rectangles on either side of the canvas
  noStroke();
  fill("pink");
  rect(0, 0, 100, height);
  rect(300, 0, 100, height);

  // Use Hue Saturation Brightness for colors on circle trail
  colorMode(HSB);

  // Set stroke weight to 4 units
  strokeWeight(2);

  // Create screen reader accessible description
  describe(
    'A circle starts in the center of the canvas. When the user holds the mouse down, the circle bounces around the canvas, its inside switches between black and white, and its outline fades between colors, leaving a rainbow trail.'
  );
}

function draw() {
  
  // Set stroke color using current hue
  stroke("white");

  // If circle's x position is between 100 and 300
  if (circlePositionX >= 100 && circlePositionX <= 300) {
    // Set fill color to black
    fill("green");

    // Otherwise
  } else {
    // Set fill color to white
    fill(255);
    stroke("green")
  }

  // Draw circle at current position
  circle(circlePositionX, circlePositionY, circleRadius);

  // If mouse is held down, animate the sketch
  if (mouseIsPressed === true) {
    // Add speed to circle's position to make it move
    circlePositionX = circlePositionX + circleSpeedX;
    circlePositionY = circlePositionY + circleSpeedY;

    // Increase hue by 1
    circleHue = circleHue + 1;
  }

  // If hue has reached maximum value
  if (circleHue >= 360) {
    // Reset hue to 0
    circleHue = 0;
  }

  // If circle is beyond left or right edge
  if (
    circlePositionX < circleRadius ||
    circlePositionX > width - circleRadius
  ) {
    // Reverse horizontal speed
    circleSpeedX = -circleSpeedX;
  }

  // If circle is beyond top or bottom edge
  if (
    circlePositionY < circleRadius ||
    circlePositionY > height - circleRadius
  ) {
    // Reverse vertical speed
    circleSpeedY = -circleSpeedY;
  }
}