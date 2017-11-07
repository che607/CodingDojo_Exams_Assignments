// Write a loop that will go through an array,
// find the average of all of the values, and
// then return it

function average(arr){
  var sum = 0
  for(i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  console.log(sum)
  avg = sum/arr.length
  return avg
}

console.log(average([5,5,10,10]))
