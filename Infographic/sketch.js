/*
var baconWords = baconIpsum.split(' ');
for (var i = 0; i < baconWords.length; i++) {
  baconWords[i] = baconWords[i].length;
}

function setup() {
  createCanvas(600,600)

  for (var i = 0; i < baconWords.length; i++){
    var rectHeight = baconWords[i] * 60;
    var rectWidth = (width / baconWords.length);

    fill('hotpink');
    noStroke()
    rect(i * rectWidth,width - rectHeight, rectWidth, rectHeight);
  }
}

function draw() {
  
}

function water() {
  //water (animated part)
  var waterX = 120;
  var waterY = 505;
  
  //90% of habitable space on planet
  fill('lightblue');
  noStroke();
  rect(waterX,waterY + 34.5,345,345);
  
  fill('black');
  rect()
  //50-80% of all life in ocean
  //rect(waterX,waterY + 120.75,345,345);
  
  fill('red');
  ellipse(120,505,30,30);
}
*/

function setup() {
  createCanvas(600,600);
  background('black');
  
  
}


function draw() {
  //text:
  fill('lightblue');
  textSize(20);
  textFont("Arial");
  text("Random Stats", 120, 90);
  
  noFill();
  stroke('lightblue');
  theQuad();
}
//
function theQuad() {

  var myData = [
    {text: "",  quadPoints: quad(120,160,465,160,465,505,120,505)},
    {text: "different",  quadPoints: quad(120,160,465,160,120,505,465,505)},
    //{text: "whatever",  quadPoints:  [70, 39, 9, 10]},
  ];
  
    for(i = 0; i < myData.length; i++){
      for(j = 0; j < myData.length; j++){
        myData[i].text;
        myData[j].quadPoints;
      }
    }
    
  
}
