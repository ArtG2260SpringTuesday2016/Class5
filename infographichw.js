var data = [25,20,37,22,18,29,30,50,63,29,44,40,22,50,16,63,27,19,26,42]
data[i]

function setup() {
  
createCanvas(600,2000)
  textSize(24)
  text("Age of the First 20 People to Finish the 5K " ,100,30)
  textSize(12)
  text("1st Place", 5, 110)
  text("20th Place", 5, 300)
  text("= Oldest", 125, 340)
  text("= Youngest", 125, 365)
  noStroke();
  fill(20,20,20)
  rect(100,325,20,20)
  
  fill(20,20,20,50)
  rect(100,350,20,20)
  
 for (var i = 0; i < data.length; i++){
   
     
    fill(0, data[i]*5);
    noStroke();
    rect(100 , (i*10)+100, 1000, 10);
 }
}