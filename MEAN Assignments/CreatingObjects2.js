function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed) {
  this.char = "1234567890abcdefghijklmnopqrstuvwxyz"
  this.distance_travelled = 0;
  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;
  this.noise = 0;
  this.speed = speed + " mph";
  this.vin = null
}

var bus = new VehicleConstructor("bus", 4, 2, 90)

VehicleConstructor.prototype.addPassengers = function(passengers) {
  this.numberOfPassengers += passengers
  console.log(this.name + "is picking up passengers");
  return this;
}

VehicleConstructor.prototype.updatedDistanceTravelled = function(){
  this.distance_travelled += this.speed;
}

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distance_travelled);
  return this;
}

VehicleConstructor.prototype.move = function(){
  this.updatedDistanceTravelled()
  this.makeNoise();
  return this;
}

VehicleConstructor.prototype.makeNoise = function() {
  this.noise = "vrrooommmm!!"
  console.log(this.name + " is making noise");
  return this;
}

VehicleConstructor.prototype.vinNumber = function(){
  var vin = " "
  for(i = 0; i < 17; i++){
    vin += this.char[Math.floor(Math.random()*35)]
  }
  this.vin = vin
}
bus.vinNumber()
console.log(bus)
