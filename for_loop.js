/*const cars = ["BMW", "AUDI", "KIA", "TESLA", "LUXUS", "NISSAN", "HONDA",]
let models = "";
for(let i = 0; i < cars.length; i++)
models = models + cars[i] + "\n"
console.log(models)
console.log(cars.length)
*/

const { text } = require("express");

/*
let i = 5;
for (let i = 0; i < 110; i++) {
  // some statements
}
console.log(i);
*/

/*

const person = {fname: "reddy", lname :"muskula", age : 27  };
let text = " ";
for(let x in person){
    text = text + person[x] + " "
}
console.log(text)


*/

const number = [11, 12, 13, 14, 15, 13, 17]
/*for(let i =0 ; i< number.length; i++){
    console.log("Printing from legacy for "+ number[i])
}*/
/*
let numberObj= [];
for(let x in number) {
numberObj.push({"index":x,"value":number[x]});
console.log("printing the in for loop  "+ number[x]);
   
}
console.log(numberObj);
*/








let text1 = [];
let lengthVal = number.length;
for(i = 0 ;i < lengthVal; i++)
{
 text1[i] = {"index":i,"value":number[i],"remainingLength":(lengthVal-1)-i,"theLastElement": number[lengthVal-i]};
}
console.dir(text1);
console.log( )

/*

for(let x of number) {

    console.log("printing the of for loop  "+ x);   
    }

*/
/*
for (i= 1; i<=10; i++ ){
    
    console.log(i)
}
for(i=10; i>=1; i--)
    console.log(i)
*/
let loopVal = 0;
/*do{
loopVal= loopVal-3;
console.log(loopVal);

}
while(loopVal>0)*/


while(loopVal >0){
    loopVal = loopVal -3;
    console.log(loopVal);
}