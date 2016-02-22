var homeRun = homeRuns.split(' ');
for (var i = 0; i < homeRun.length; i++) {
  homeRun[i] = homeRun[i];
}

function setup() {
  createCanvas(800,800)
  
  textSize(32)

  for (var i = 0; i < homeRun.length; i++){
    var ellipseHeight = homeRun[i] ;
    var ellipseWidth = random (100, 770);

    fill (random(1,255), random (1,255), random(1,255));
    noStroke()
    text(homeRun[i], (i * 16)+2, (ellipseWidth+5));
    ellipse((i * 16)+22 , (ellipseWidth - ellipseHeight), ellipseHeight, ellipseHeight);
    
  }
}

