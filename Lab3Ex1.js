function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);


  ellipse(220, 150, 40);

  ellipse(320, 150, 40);
  ellipse(320, 100, 80);
  rect(200, 100, 150, 60);
  
  if (mouseX <= 200) {
    fill("blue");
  } else if (mouseX >= 200 && mouseX <= 400) {
    fill("grey");
  } else if (mouseX >= 400 && mouseX <= 600) {
    fill("purple");
  } else {
    fill("limegreen");
  }
}
