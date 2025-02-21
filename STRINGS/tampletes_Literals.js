let name = "Reddy";
let greeting = `hello ${name}`
console.log(greeting)

// 2 tables

let num = 2;
let table = ""
for(let i = 1; i<=10; i++){
table = `${num}*${i} = ${num*i}`
console.log(table)
}

// print given name in upper case
console.log(`HELLO, ${name.toUpperCase()}`)

//Print the name in lower case
console.log(`Hi, My Name is, ${name.toLowerCase()}`)

//SUM OF TWO NUMBERS

let a = 10;
let b = 20;
console.log(`sum of ${a} and ${b} is ${a+b}`)

// functions
function myfunction(numb){
    for( let i=1; i<=10; i++){
        console.log(`${numb} * ${i} = ${numb * i}`)
    }
}myfunction(7)


//How can you nest a template literal inside another? Provide an example

function greet(name, timeOfDay){
    return `Good ${timeOfDay } ${name}, HOW ARE YOU DOING. ${`Remember, ${name} YOUR IS MEETING AT 3 PM `}IN THE AFTERNOON`
}
console.log(greet("MUSKULA", "MORNING"))

//
let person = 
    { 
        firstName: "John", 
        lastName: "Doe"
    };
let address = 
    {
         city: "New York", 
         country: "USA"
    };
console.log(`${person.firstName}, ${person.lastName} lives in ${address.city}, ${address.country} `)

//
let person1 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 28,
    address: "456 Elm St, Springfield"
};
console.log(`name: ${person1.firstName} ${person1.lastName}`)
console.log(`age: ${person1.age}`)
console.log(`address: ${person1.address}`)

//  EVEN NUMBERS
let numbr = [1,2,3,4,5,6,7,8,9,10]
let even = numbr.filter(numbr=> numbr % 2 === 0);
console.log(even)

//ODD NUMBERS
let odd = [];
for(let i=1; i<=numbr.length; i++){
    if(numbr[i] % 2 ==! 0 ){
        odd.push(numbr[i])
    }
} console.log(odd)


// PRIME NUMBERS USING LOOPS

for(let p = 2; p<=100; p++){
    isprime = true

    for(let q= 2; q<p; q++){
        if(p % q === 0){
            isprime = false;
            break;
        }
    }
    if(isprime){
        console.log(p)
    }
}

//PRIME NUMBER USING FUNCTIONS 

function primenumber(n){
    if(n<2){
        return `${n} is not a prime number`
    }

    for(let a=2; a<n; a++){
        if(n%a ===0){
            return `${n} is not a prime NUM`
        }
    }
            return `${n} is a PRIME`
        
    }
console.log(primenumber(11));


