var num:string|null=prompt("Enter a num")
var num2:number=Number(num)

var lastNum:number=num2%10;
var firstNum:number=num2
var len:number=num2.toString().length-1

 var firstNum:number=parseInt(num2/Math.pow(10,len));
 var sumBoth:number=firstNum+lastNum

document.write("Sum of first and last digit : " + sumBoth + "<br>")
