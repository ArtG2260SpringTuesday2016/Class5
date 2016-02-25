//pages in each Harry Potter book
var pagesData = [309,341,435,743,870,652,759];



function setup() {
  createCanvas(600,600)

var ellipseSize = function(pagesData){
  for (var i = 0; i<pagesData.length; i++){
    var ellipseWidthAndHeight = pagesData[i]/10;
  }
return ellipseSize(pagesData);
}

  for (var i = 0; i<pagesData.length; i++){
    noFill()
    ellipse(300,(pagesData[i]/1.5)-150+ellipseSize, ellipseSize, ellipseSize);
  }
}

function draw() {

}
