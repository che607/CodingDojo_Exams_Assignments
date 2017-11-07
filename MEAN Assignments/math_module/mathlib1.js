module.exports = function (){
  return {
    add: function(a,b) {
         return a + b
    },
    multiply: function(a,b) {
         return a * b
    },
    square: function(a,b) {
         return a * a
    },
    random: function(a,b) {
         return Math.floor((Math.random() * b) + a);
    }
  }
};
