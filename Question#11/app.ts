var num:string|null=prompt("To find the sum of all digit ")
var num1:number=Number(num)
var sum=0;
while (num1>0) {
sum+=num1%10;
num1=parseInt(num1/10)
    
}
document.write("Sum of all digit : " + sum)