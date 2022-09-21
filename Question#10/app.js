var num = prompt("Enter a num");
var num2 = Number(num);
var lastNum = num2 % 10;
var firstNum = num2;
var len = num2.toString().length - 1;
var firstNum = parseInt(num2 / Math.pow(10, len));
var sumBoth = firstNum + lastNum;
document.write("Sum of first and last digit : " + sumBoth + "<br>");
