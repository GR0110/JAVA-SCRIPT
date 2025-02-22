const num = [20, 30, 10, 45, 32, 18]
console.log(num.length)
for(let i = 0; i<num.length-1; i++){
    for(let j= 0; j<num.length-1-i; j++){
        if(num[j]>num[j+1]){
            let temp = num[j]
            num[j]=num[j+1]
            num[j+1]=temp
        }
    }
}console.log(num)

/////////////////////////////////////////////////////////

const numb = [10, 12, 55, 5, 7, 47, 58, 17, 1]
numb.sort((a,b) => a-b)
console.log(numb)
/////////////////////////////////////////////////////////
numb.sort((a, b) => b - a)
console.log(numb)