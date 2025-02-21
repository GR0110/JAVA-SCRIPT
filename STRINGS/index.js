let firstName = "GANGAdHAR";
let middleName = "reddy"
let lastName = "MUSKULA";
let FullName = firstName.concat (middleName, " ",lastName)
console.log(FullName) // concat adding 
console.log(FullName.indexOf("d")) // indexOf-- first value
console.log(FullName.lastIndexOf("d"))// lastIndexOf-- last value
console.log(FullName.charAt(0).toUpperCase()+ FullName.slice(1).toLowerCase());// 
console.log(FullName.slice(0, 5)) //-- slice -only give 0 to before 5
console.log(FullName.substring(5,8)) // substring -- indexstart 5 and end before 8
console.log(FullName.substr(5,6)) 
console.log(FullName.replace("reddy", " REDDY"))// replace the specific value

let fruits = "apple, banana, graphs, orange"
console.log(fruits.split(`,`)) // split --- Split string into array

console.log(FullName.includes("MUSKULA")) // same as below

console.log(fruits.includes("APPLE")) // includes --  search if there is value
console.log(FullName.startsWith("GAN")) // startWith -- check if the string start with
console.log(FullName.endsWith("AR"))// endsWith-- check if the string ends with