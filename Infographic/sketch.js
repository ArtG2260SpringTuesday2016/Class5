//takes in gdp's of various countries and outputs 
//circles proportional to the gdp's 

function setup() {
  createCanvas(600,600);
  background('darkgrey');
}

function draw() {
  fill('white');
  textSize(20);
  textFont("Arial");
  text("Countries by GDP", 120, 90);
  
  GDP()
}

function GDP() {
  
  var gdpArray = [
  {name: "Qatar", gdp: [140649], textLoc: [30,400]},
  {name: "Macau", gdp: [139767], textLoc: [75,420]},
  {name: "Luxembourg", gdp: [97662], textLoc: [113,400]},
  {name: "Singapore", gdp: [82763], textLoc: [165,420]},
  {name: "Kuwait", gdp: [73246], textLoc: [210,400]},
  {name: "Brunei", gdp: [71185], textLoc: [255,420]},
  {name: "UAE", gdp: [67674], textLoc: [300,400]},
  {name: "Norway", gdp: [64856], textLoc: [345,420]},
  {name: "Switzerland", gdp: [57235], textLoc: [390,400]},
  {name: "Hong Kong", gdp: [55084], textLoc: [445,420]},
  {name: "United States", gdp: [54629], textLoc: [500,400]},
  ];
  
  
  for(i = 0; i < gdpArray.length; i++){
    //text(gdpArray[i].name, 300,300,600,600);
    fill('white');
    textSize(10);
    text(gdpArray[i].name, gdpArray[i].textLoc[0], gdpArray[i].textLoc[1], 600,600)
  
    for(j = 0; j < gdpArray.length; j++){
      var circDim = gdpArray[i].gdp/1500;
      noStroke();
      fill('white');
      ellipse((gdpArray[i].textLoc[0] + 30),(gdpArray[i].textLoc[1] - 150),circDim,circDim);
      //console.log(gdpArray[i].gdp[j]);
    }
  }
}
