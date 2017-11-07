function Deck() {

  var value = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
  var suit = ["clubs","hearts","spades","diamonds"]
  // self = this

  this.deck = []
  for(idx = 0; idx < value.length; idx++){
    for(idx2 = 0; idx2 < suit.length; idx2++){
      this.deck.push(new Card(value[idx], suit[idx2]));
    }
  }
  console.log("deck: ",this.deck)
  return this
}

function Card(value, suit){
  this.value = value;
  this.suit = suit;
}

var deck = new Deck()

Deck.prototype.shuffle = function() {
  var copy = [], n = this.deck.length, i;

  while (n) {
    i = Math.floor(Math.random() * this.deck.length);
    if (i in this.deck) {
      copy.push(this.deck[i]);
      delete this.deck[i];
      n--;
    }
  }
  this.deck = copy;
  console.log("shuffled deck: ",this.deck)
  return this;
}

Deck.prototype.reset = function(){
  var value = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
  var suit = ["clubs","hearts","spades","diamonds"]
  // self = this

  var resetdeck = []
  for(idx = 0; idx < value.length; idx++){
    for(idx2 = 0; idx2 < suit.length; idx2++){
      resetdeck.push(new Card(value[idx], suit[idx2]));
    }
  }
  this.deck = resetdeck
  console.log("reset deck: ",this.deck)
  return this
}

Deck.prototype.dealcard = function(){
  this.dealtcard = []
  var value = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
  var suit = ["clubs","hearts","spades","diamonds"]
  var ranvalue = Math.floor(Math.random() * value.length)
  var ransuit = Math.floor(Math.random() * suit.length)
  this.dealtcard.push(new Card(value[ranvalue], suit[ransuit]));
  console.log("dealt card: ",this.dealtcard)
  return this;
}

function Player(name){
  this.name = name;
  this.hand = [];
}

Player.prototype.dealhand = function(){
  this.hand.push(deck.dealcard())
  return this
}



var player = new Player("Ricardo")
player.dealhand()
console.log(player)
