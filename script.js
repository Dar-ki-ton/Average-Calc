// Average Calculator

// Event Listener
document.getElementById("calcBtn").addEventListener("click", calculate);

// Event Function
function calculate() {
  // Input
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var num3 = parseInt(document.getElementById("num3").value);
  var aveOutEl = document.getElementById("ave-out");
  var sumOutEl = document.getElementById("sum-out");
  var proOutEl = document.getElementById("pro-out");
  var remOutEl = document.getElementById("remain-out");
  var powOutEl = document.getElementById("power-out");
  var decOutEl = document.getElementById("deci-out");
  var tanOutEl = document.getElementById("tan-out");
  var ranOutEl = document.getElementById("rand-out");

  // Process
  var average = (num1 + num2 + num3) / 3;
  var sum = num1 + num2 + num3;
  var product = num1 * num2 * num3;
  var remainder = num1 % num2;
  var power = num1 ** num2;
  var decimal = num1.toFixed(2);
  var tangent = Math.tan(num3);
  var random = Math.random() * (num1 - num2) + num2;

  // Output
  aveOutEl.innerHTML = average;
  sumOutEl.innerHTML = sum;
  proOutEl.innerHTML = product;
  remOutEl.innerHTML = remainder;
  powOutEl.innerHTML = power;
  decOutEl.innerHTML = decimal;
  tanOutEl.innerHTML = tangent;
  ranOutEl.innerHTML = random;
}
