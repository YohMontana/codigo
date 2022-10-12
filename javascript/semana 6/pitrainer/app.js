const button_start = document.getElementById("button_start");

button_start.addEventListener("click", function() {
  this.disabled = true;
  document.getElementById("game").style.display="block";
});

//Game
const pi_decimals =
    "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";
let position = 0;

const input_decimals = document.getElementById("input_decimals");

input_decimals.addEventListener("keyup", function(){
  this.value = "";
  this.focus();
});

input_decimals.addEventListener("keydown",function(evt){
  
})
