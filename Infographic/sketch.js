var colorbl = colorb.split(' ');
for (var i = 0; i < colorbl.length; i++) {
  colorbl[i] = colorbl[i].length;
}

var colorre = colorr.split(' ');
for (var i = 0; i < colorre.length; i++) {
  colorre[i] = colorre[i].length;
}

function setup() {
  createCanvas(500,500)

for (var i = 0; i < colorre.length; i++){
 var rectHeight = colorre[i] * 50;
 var rectWidth = (250 / colorre.length);
 fill('red');
 rect(i * rectWidth,width - rectHeight, rectWidth, rectHeight);
  }

for (var i = 0; i < colorbl.length; i++){
 var rectHeight = colorbl[i] * 50;
 var rectWidth = (250 / colorbl.length);
  fill('blue');
  rect((i * rectWidth)+250,width - rectHeight, rectWidth, rectHeight);
  }
}

function draw() {

}
