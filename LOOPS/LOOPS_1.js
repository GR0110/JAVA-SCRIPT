// Write a function that takes a number n and returns its factorial using a loop.
// factorial 3= 3*2*1 = 6;          5=4*3*2*1= 120  it should not less than 0

function factorial(n){
    if(n<0){
        return "it should not be less than 0";
    }
        let result = 1;
        for(let i = 1; i<=n; i++){
            result = result * i;
        }
        return result
}
console.log(factorial(4))

// Write a function that takes a number n and returns true if it is a prime number, else false.

function primenumber(n){
    if(n<2){
        return "It is Not a PRIME NUMBER"
    }
    for(let p = 2;p<n; p++){
        if(n%p===0){
            return "It is a NOT a PRIME number"
        }
    }
        return "it is PRIME NUMBER"
    
}console.log(primenumber(25))

// Write a function that takes a number and returns the sum of its digits using a loop.
        //OUTPUT sumDigits(1234); // Output: 10


//Write a program that reverses a given number using a while loop.
function reverseNum(number){
    let reversed = 0;
    while(number>0){
    let lastDigit = number % 10;
    reversed = reversed * 10 + lastDigit;
    number = Math.floor(number/10);
    }
    return reversed
}
let result = reverseNum(84627)
console.log(result)

// REverse the given number using FOR LOOP

let number = 852147;
let reversed = 0;

for(; number>0; number = Math.floor(number/10)){
    let lastDigits = number%10
    reversed = reversed * 10+lastDigits;
    

}console.log(reversed)


//Write a function that counts the number of digits in a given number using a while loop.
function countDigits(numb){
let count = 0;
while(numb>0){
    numb = Math.floor(numb/10);
    count++
}
return count
}
let numb = 111223
console.log(countDigits(numb))

// using For loop write a count;
function MYCOUNTNUM(numberr){
let count = 0
    for(; numberr>0; numberr = Math.floor(numberr / 10)){
        count++;
}return count;
}

console.log(MYCOUNTNUM(12456))