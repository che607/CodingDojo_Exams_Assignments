var myFirstMethod = {
  simpleLoop: function (x, y){
    var sum = 0
    for(i = x; x <= y; x+=1){
      sum += x
      console.log(sum);
    }
    console.log(sum);
  },
  array: function (array){
    var min = array[0]
    for(idx = 1; idx < array.length; idx++){
      if(array[idx] < min){
        min = array[idx];
      }
    }
  },
  average: function (arr){
    var sum = 0
    for(i = 0; i < arr.length; i++){
      sum += arr[i]
    }
    console.log(sum)
    avg = sum/arr.length
    return avg
  }
}

myFirstMethod.average([2,3,4,6,1,8,-3]);
