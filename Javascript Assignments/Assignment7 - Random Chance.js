function slotMachine(quarters){
var ranWin = (Math.floor(Math.random() * 50) + 50)
var ranNum = (Math.floor(Math.random() * 100))
var quarters = 2
while (quarters > 0){
if(ranNum === 1){
  console.log(ranWin);
  quarters = quarters + ranWin;

} else {
  console.log(quarters);
  quarters = quarters - 1
}
}
}
slotMachine()
