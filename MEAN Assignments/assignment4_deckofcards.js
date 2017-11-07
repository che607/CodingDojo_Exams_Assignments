function DeckConstructor() {
  deck = []
  this.value = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
  this.suit = ["clubs","hearts","spades","diamonds"]
  for(idx = 0; i < this.value.length; idx++){
    for(idx2 = 0; idx2 < this.suit.length; idx2++){
      cards.push(this.value[idx], this.suit[idx2]);
    }
  }
}

DeckConstructor.prototype.shuffle = function (array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);
    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  console.log(copy)
  return copy;
}

var newarr = new DeckConstructor([1,2,3,4,5,6,7,8,9,10])
newarr.shuffle()
