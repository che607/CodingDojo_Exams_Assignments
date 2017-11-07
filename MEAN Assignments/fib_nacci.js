function fib() {
  var a = 1;
  var b = 0;
  var temp;
  function nacci() {
    console.log(a)
    temp = a;
    a = a + b;
    b = temp;

  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"

// function Outer() {
//   var count = 0;
//   function inner() {
//     count++
//     // console.log(count);
// }
//     return inner
// }
//
// var counter = Outer();
//               // if we invoke the counter function
// counter()     // this will console.log "1"
// counter()     // this will console.log "2"
// counter()     // this will console.log "3"
// counter()
