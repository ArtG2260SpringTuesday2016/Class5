//pages in each Harry Potter book
var pagesData = [309,341,435,743,870,652,759];

var ellipseNumbers = [1,2,3,4,5,6,7];
var ellipseSide = 0;
for (var j = 0; j<7; j++){
  ellipseSide = ellipseNumbers[j]
}

function setup() {
  createCanvas(600,600)

  for (var i = 0; i<pagesData.length; i++){
    var ellipseHeight = pagesData[i]/10;
    var ellipseWidth = pagesData[i]/10;
    

    noFill()
    ellipse(ellipseSide*j,(pagesData[i]/1.5)-150, ellipseWidth, ellipseHeight);
  }
}

function draw() {

}
