function VehicleConstructor(name, numberOfWheels, numberOfPassengers) {
  var vehicle = {};
  vehicle.name = name;
  vehicle.numberOfWheels = numberOfWheels;
  vehicle.numberOfPassengers = numberOfPassengers;
  vehicle.noise = 0
  vehicle.makeNoise = function() {
    vehicle.noise = "vrrooommmm!!"
    console.log(vehicle.name + "is making noise");
  }
  vehicle.addPassengers = function() {
    vehicle.numberOfPassengers = 5
    console.log(vehicle.name + "is picking up passengers");
  }
    return vehicle;
}


var bus = VehicleConstructor("bus", 4, 2)
console.log(bus)
bus.makeNoise()
bus.addPassengers()
console.log(bus)
