function ninjaConstructor(name){
  var ninja = {
    name : name,
    cohort : "MEAN Stack",
    beltLevel : "Yellow Belt",
    levelUp : function(){
      console.log(`${ninja.name} is leveling up`)
      ninja.beltLevel = "Black Belt"
    }
  }
  ninja.levelUp()
  return ninja
}

console.log(ninjaConstructor("Ricardo"))
