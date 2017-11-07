// Create a simple for loop that sums
// all the integers between x and y (inclusive).
// Have it console log the final sum.

function simpleLoop(x, y){
  var sum = 0
  for(i = x; x <= y; x+=1){
    sum += x
    console.log(sum);
  }
  console.log(sum);
}

simpleLoop(5,10)
