// var num:number=8;
// for(var add=2;add<num;add++){
//     if(add%2==0){
//         console.log(add*2);
//     }
// }
// export{}
// function num(a:number,b:number)  : number{
//     return  a + b ;
//     console.log(num);
// }
// num(20,15)
// function myName(a:string){
//     console.log(a.length);
//     var surName:number=prompt("Enter a number")
// }
// myName(surName)
// function nameFull(a:number){
//     var b:string|null=prompt("Enter a num")
//     var c:number=Number(b)
// }nameFull{
//     document.write(c.length)
// }
// function myName(a:number){
//     console.log(a.length);
// }
// var userName:any=prompt("Enter a num"){
//     document.write(myName)
// }
// myName(userName)
// var b:string|null=prompt("Enter a num")
// var c:number=Number(b)
// function fullName(b:number){
//     console.log(c.length);
// }
// fullName(b)
// var sum=10
// for(var i=1;i<=100;i++){
//     if(i%2==0){
//         sum=sum+1
//     }
// }
// console.log(sum);
// function temp(a:number){
//     console.log(  a.length);
// }
// temp(98)
// function fraction(a:number,b:number){
//     console.log(Math.min(a,b));
// }
// fraction(36,54)
// function fullName(a:number,b:number){
//     for(var i=Math.min(a,b)){
//         if(a%i==0 && b%i==0){
//             console.log(i);
//         }
//     }
// }
// fullName(36,54)
var num = 20;
for (var i = 0; i < num; i++) {
    if (!(i % 2 == 0 || i % 6 == 0 || i % 4 == 0)) {
        console.log(("Prime " + i));
    }
}
