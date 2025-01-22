//checking if a num is greater than another num :

let num1 = 9;
let num2 = 17;
if(num1 < num2){
console.log("the num1 is greater than num2")
}
else { 
console.log("the num2 is greater than num1")
}

//checking string is equal to another string

let UserName = "reddy"
let anotherUserName = "reddy"
if(UserName == anotherUserName){
    console.log("pick another username")
}
else{
console.log("you can pick this UserName")
}

//checking if variable is num or not

let score = 456
if(typeof score === 'number'){
    console.log("this is a number")
}
else{
    console.log("this is not a number")
}


// checking if a boolean value is true or false:

let isTeaReady = false
if (isTeaReady){
console.log("Tea is ready")
}
else console.log("tea is not ready")