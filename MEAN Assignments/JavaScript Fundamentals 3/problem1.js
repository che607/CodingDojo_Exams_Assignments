function personConstructor(name){
  var person = {
    name : name,
    distance_traveled : 0,
    say_name : function(){
      console.log(person.name);
    },
    say_something : function(phrase){
      console.log(`${person.name} says: ${phrase}`);
    },
    walk : function(){
      console.log(`${person.name} is walking`);
      person.distance_traveled += 3
      return person
    },
    run : function(){
      console.log(`${person.name} is running`);
      person.distance_traveled += 10
      return person
    },
    crawl : function(){
      console.log(`${person.name} is crawling`);
      person.distance_traveled += 1
      return person
    }
  }
  person.say_something("We just made an object inside of a function!")
  person.walk().run()
  return person
}

console.log(personConstructor("Ricardo"))
