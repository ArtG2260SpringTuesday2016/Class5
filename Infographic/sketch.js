var swimmerNames = swimmers.split(' ');
for (var i = 0; i < swimmerNames.length; i++) {
  swimmerNames[i] = swimmerNames[i].length;
}

function setup() {
  createCanvas(600,600)
  background(64,211,216)

  for (var i = 0; i < swimmerNames.length; i++){
    var rectHeight = swimmerNames[i] * 60;
    var rectWidth = (width / swimmerNames.length * 2);

    fill('#FFFFFF');
    noStroke()
    ellipse(i * 16, 300, rectWidth, rectHeight);
  }

}

function draw() {
  textSize(32);
  text("Swimmers Names By Length", 100, 50);
  fill(0,0,100)
  text("4 Letters", 10, 375);
  text("5 Letters", 200, 300);
  text("6 ", 375, 225);
  text("7", 425, 150)
}
