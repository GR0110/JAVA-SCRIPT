//Pattern Printing:Print the following pattern using nested loops:\

let row = 5;
for(let i = row; i>0; i--){
    let pattern = '';
    for(let j = 0; j<i; j++){
        pattern = pattern + "*"
    }
console.log(pattern)}
////////////////////function/////////////

function mypattern(star){
    let result = "";
for(let i = star; i>0; i--){
    let spattern = "";
    for(let j = 0; j<i; j++){
       spattern=spattern + "$" 

    }result = result + spattern + "\n"
}
return result
}console.log(mypattern(9))
////////////////////////////////////////////
function patterns(row){
    for(let i = row; i>=1; i--){
        console.log("*".repeat(i))
    }
}patterns(10);

//Multiplication Table (1 to 10):Write a program that prints the multiplication table from 1 to 10 using nested loops.

function multiplication(numb){
    for(let i=1; i<=numb;i++){
        console.log(`multiplication table ${i}`);
    
    for(let j=1;j<=10;j++){
     console.log(`${i} * ${j} = ${i*j}`);
    }
}
}multiplication(10)