function setup() {
  createCanvas(1000, 1000);
  drawCircles();
  
}
function draw() {
  
}

function drawCircles() {
  for(var key in typelist) {
    var fontName = key;
    var rank = typelist[key];
    console.log(fontName + '' + rank);
    drawACircle(fontName, rank);
  }
}


// helpler
function drawACircle(fontName, rank) {
  var size = 20;
  var yFont = yValue;
  var width = size * rank;
  console.log(xValue);
  
  if(xValue > (1000 - width)) {
    yValue += 200;
    yFont = yValue;
    xValue = 100;
  }
  
    if (width <= 100) {
    xValue += 50;
  }
  
  if(width <= 80) {
    yFont += 60;
  }
  
  console.log(width)
  fill(color(255, 0, 0));
  ellipse(xValue, yValue, width, width);
  fill(color(0,0,0))
  text(fontName, xValue-15, yFont);
  xValue += (width + 10);
}