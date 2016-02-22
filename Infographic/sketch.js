//takes in gdp's of various countries and outputs 
//circles proportional to the gdp's 

function setup() {
  createCanvas(600,600);
  background(51);
}

function draw() {
  fill('white');
  textSize(20);
  textFont("Arial");
  text("Countries by GDP", 50, 90);
  
  textSize(10);
  text("All figures are in current Geary–Khamis dollars, more commonly known as international dollars (Int$)", 50, 120);
  text("World Bank (2011-2014)", 50, 140);
  
  GDP()
}

function GDP() {
  
  var gdpArray = [
  {name: "Qatar", gdp: [140649], gdpText:["140.6k"], textLoc: [30,500]},
  {name: "Macau", gdp: [139767], gdpText:["139.8k"], textLoc: [70,500]},
  {name: "Luxembourg", gdp: [97662], gdpText:["97.6k"], textLoc: [113,500]},
  {name: "SG", gdp: [82763], gdpText:["82.8k"], textLoc: [180,500]},
  {name: "Kuwait", gdp: [73246], gdpText:["73.2k"], textLoc: [210,500]},
  {name: "Brunei", gdp: [71185], gdpText:["71.2k"], textLoc: [255,500]},
  {name: "UAE", gdp: [67674], gdpText:["67.7k"], textLoc: [300,500]},
  {name: "Norway", gdp: [64856], gdpText:["64.9k"], textLoc: [335,500]},
  {name: "Switzerland", gdp: [57235], gdpText:["57.2k"], textLoc: [385,500]},
  {name: "Hong Kong", gdp: [55084], gdpText:["55.1k"], textLoc: [445,500]},
  {name: "United States", gdp: [54629], gdpText:["54.6k"], textLoc: [500,500]},
  ];
  
  
  for(i = 0; i < gdpArray.length; i++){
    fill('white');
    textSize(10);
    text(gdpArray[i].name, gdpArray[i].textLoc[0], gdpArray[i].textLoc[1], 600,600)
    text(gdpArray[i].gdpText, gdpArray[i].textLoc[0], gdpArray[i].textLoc[1] + 20, 600,600)

    for(j = 0; j < gdpArray.length; j++){
      var circDim = gdpArray[i].gdp/2000;
      noStroke();
      fill('yellow');
      ellipse((gdpArray[i].textLoc[0] + 30),(gdpArray[i].textLoc[1] - 150),circDim,circDim);
      //console.log(gdpArray[i].gdp[j]);
    }
  }
}
   
