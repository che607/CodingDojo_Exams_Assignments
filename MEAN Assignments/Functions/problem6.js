function myDoubleConsoleLog(param1,param2){
    if(typeof param1 === "function"){
      console.log(param1());
    }
    if(typeof param2 === "function"){
      console.log(param2());
    }
}

function test1(){
  console.log("test-1");
  return "kari"
}

function test2(){
  console.log("test-2");
  return "ricardo"
}

function caller2(param){
  console.log("starting");
  setTimeout(function(){
  if(typeof param === "function"){
    param(test1,test2);
  }
}, 10000);
console.log("ending?");
return "interesting"

}

console.log(caller2(myDoubleConsoleLog));
