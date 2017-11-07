var _ = {
   map: function(arr,callback) {
     var newarr = []
     for(var i = 0; i < arr.length; i++) {
       newarr.push(callback(arr[i]));
     }
     return newarr
   },
   reduce: function(arr,callback) {
     reduction = 0;
     for(var i = 0; i < arr.length; i++){
       reduction += callback(arr[i]);
     }
     return reduction;
   },
   find: function(arr, callback) {
    find = 0
    for(var i = 0; i < arr.length; i++){
      find = callback(arr[i])
    }
    return find
  },
  filter: function(arr,callback) {
    var filter = []
    for(var i = 0; i < arr.length; i++){
      var result = callback(arr[i])

      if(result !== undefined){
        filter.push(callback(arr[i]))
      }
    }
    return filter
  },
  reject: function(arr,callback) {
    var reject = []
    var donotuse = []
    for(var i = 0; i < arr.length; i++){
      var result = callback(arr[i])

      if(result !== undefined){
        donotuse.push(callback(arr[i]))
      }
      else{
        reject.push(callback(arr[i]))
      }
    }
    return reject
   }
 }

array = [1,2,3,4,5,6,7,8,9,10]

var reject = _.reject(array, function(num){if(num % 2 == false){return  num} });
console.log(reject)
var filter = _.filter(array, function(num){if(num % 2 == false){return  num} });
// console.log(filter)
var find = _.find(array, function(num){if(num = 5){return num } });
// console.log(find)
var map = _.map(array, function(num){var change = num * 5; return change});
// console.log(map);
var reduce = _.reduce(array, function(num){ return num });
// console.log(reduce)
