//This converts the data from data.js from a string into an array
var energy = data.split(' ');

//These variables are used to hold the size of each different
//number from each array
var size1 = 0;
var size2 = 0;
var size3 = 0;



//This converts the data array from strings into numbers
for (var i = 0; i < energy.length; i++){
  energy[i] = Number(energy[i]);
  
//This function counts the repetitions of each number
//in an array (in our case it will be energy)
//and adds them into their respective global size variable
  var divideEnergy = function(ar){
    for (var i = 0; i < ar.length; i++){
     if (ar[i] === 0){
       size1++
     }
     else if (ar[i] === 1){
       size2++
     }
     else {
       size3++
     }
    }
  }
}

function setup(){
  var resize = 10;
  createCanvas(600, 600);
  background("white");
 //This function helps me place objects where I want
  var mid = function(x, y, z){
   return [width/x - z/2, height/y - z/2]
  }
 
divideEnergy(energy);

//Helper function to sort arrays
var sort = function(ar){
  return ar.sort(function(a,b){return b-a});
}

var sizes = [size1, size2, size3]

//Here are the shapes that will represent the usage of energies
/*var eng1 = [fill("black"), ellipse (width/2, height/2, size1 * 10, size1 * resize)];

var eng2 = [fill("blue"), ellipse(width/2, height/2, size2 * 10, size2 * resize)];

var eng3 = [fill("yellow"),ellipse(width/2, height/2, size3 * 10, size3 * resize)];
*/

var display = function(){
  //This code would use variables instead of arrays if defining the shape
  //in a variable did not cause it to appear
  sort(sizes);
  for (i = 0; i < sizes.length; i++){
    if (sizes[i] === size1){
      [fill("black"), ellipse (width/2, height/2, size1 * 10, size1 * resize)]
    }
    else if (sizes[i] === size2){
      [fill("blue"), ellipse(width/2, height/2, size2 * 10, size2 * resize)]
    }
    else if (sizes[i] === size3){
      [fill("yellow"),ellipse(width/2, height/2, size3 * 10, size3 * resize)]
    }
  }
}
  
display();




}

console.log(energy);
