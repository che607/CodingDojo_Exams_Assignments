function caller(param){
  if (typeof param == "function"){
      param();
  }
}

x = function test(){
  console.log("test")
}

caller(x)
