function setup() {
  createCanvas(800, 800);
colorMode(HSL)
}


function draw() {
  background(220);

  abstractDude(100, 100, 0.3,70);
}

function abstractDude(x, y, size,hue) {
  push();
  scale(size);

  translate(x, y);

  ellipse(220, 150, 40);

  ellipse(320, 150, 40);
  ellipse(320, 100, 80);
  rect(200, 100, 150, 60);
  pop();
  if (mouseX <= 200) {
    fill(hue+100,50,50);
  } else if (mouseX >= 200 && mouseX <= 400) {
    fill(hue,50,50);
  } else if (mouseX >= 400 && mouseX <= 600) {
    fill(hue+50,50,50);
  } else {
    fill(hue+30,50,50);
  }
}
