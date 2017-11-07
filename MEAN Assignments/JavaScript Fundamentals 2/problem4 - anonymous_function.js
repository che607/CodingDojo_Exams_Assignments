var simpleLoop = function (x, y){
  var sum = 0
  for(i = x; x <= y; x+=1){
    sum += x
    console.log(sum);
  }
  console.log(sum);
}

simpleLoop(5,10)


var array = function (array){
  var min = array[0]
  for(idx = 1; idx < array.length; idx++){
    if(array[idx] < min){
      min = array[idx];
    }
  }
  console.log(min)
}

array([4,3,6,-5,-10,5])


var average = function (arr){
  var sum = 0
  for(i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  console.log(sum)
  avg = sum/arr.length
  return avg
}

console.log(average([5,5,10,10]))
