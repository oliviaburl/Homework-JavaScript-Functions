var scenario1Ele = document.body.querySelector(".scenario1");
var scenario2Ele = document.body.querySelector(".scenario2");
var scenario3Ele = document.body.querySelector(".scenario3");
var scenario4Ele = document.body.querySelector(".scenario4");
var resetButtonEle = document.body.querySelector(".resetButton");

var milesPerYear = prompt("How many miles do you drive in a year?");
var gasPrice = prompt("What is the current gas price in your area?");

const mpg12 = 12;
const mpg17 = 17;
const mpg26 = 26;
const mpg29 = 29;

function estimatedYearlyCost(miles, price, mpg) {
  return (miles / mpg * price).toFixed(2);
}

scenario1Ele.innerHTML = "A car with an MPG rating of " + mpg12 + " for " + milesPerYear + " miles at $" + gasPrice + " per gallon would cost $"+ estimatedYearlyCost(milesPerYear, gasPrice, mpg12) + ".";

scenario2Ele.innerHTML = "A car with an MPG rating of " + mpg17 + " for " + milesPerYear + " miles at $" + gasPrice + " per gallon would cost $"+ estimatedYearlyCost(milesPerYear, gasPrice, mpg17) + ".";

scenario3Ele.innerHTML = "A car with an MPG rating of " + mpg26 + " for " + milesPerYear + " miles at $" + gasPrice + " per gallon would cost $"+ estimatedYearlyCost(milesPerYear, gasPrice, mpg26) + ".";

scenario4Ele.innerHTML = "A car with an MPG rating of " + mpg29 + " for " + milesPerYear + " miles at $" + gasPrice + " per gallon would cost $"+ estimatedYearlyCost(milesPerYear, gasPrice, mpg29) + ".";

resetButtonEle.addEventListener("click", function(){
  location.reload(true);
})