// Write a program to reverse an array using a for loop.
let Number = [98,89,96,55,88,72,99]
let reverse =[]
for(let a = Number.length-1; a >=0; a--){
    reverse.push(Number[a])
}console.log(reverse)

/////////////////////////////////////////////////////////////////////////
let numberr = [11,99,22,88,33,77,44,55,]
let ArrayRev = [];
for(let b= numberr.length - 1; b>=0; b--){
    ArrayRev.push(numberr[b]);
}
console.log(ArrayRev)
//////////////////////////////////////////////////////////////////////////

let num = [2,51,81,7,64,44,66,11,]
let rev = new Array(num.length)

for(let d=0; d<num.length; d++){
    rev[num.length-1 -d] = num[d]
}
for(let d= 0; d<num.length; d++){
    num[d]=rev[d]
}
console.log(num)

////////////////////////////////////////////////////////////////

let numb = [14, 18, 6, 76, 57, 5, 83];
let araay = [];

for(i=0; i<numb.length; i++){
    araay[numb.length -1 -i] = numb[i]
} console.log(araay)