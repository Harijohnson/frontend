let arr= [2,33,5,6,7,977,5,4,4]

// normal function call
let  result = function addSum(arr){
    sum=0
    for (let val of arr){
        sum+=val
    }
    return sum
}
console.log(result(arr))

//aerow functions
let resultSum = (arr) => {  // asign to varible and remove the function key word in this statement
    sum=0
    for (let val of arr){
        sum+=val
    }
    return sum
}

console.log(resultSum(arr))   // call the function by object with arguments 


// area of circle pi r2  or pi r squre 
var area = r  => Math.PI*r*r    
//above is function an d function call if the function has only one paramate eans 
// ther is no need for => {}  no => () in function calling statement

console.log(area(2))


