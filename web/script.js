// console.log('happy new year')
//alert('new year')
// comment
/*  long line comment 
like this two lines
in this code */

// varible

// let score = 0  // inetilazation

// score = 10  //asignment

// console.log('score: ' + score)

// let amt =20000

// amt=10  // this is posible in here
// console.log('total amt in hand is ' + amt)


// const pi= 3.17
// pi=232   this is not posible 
// console.log('pi: ' + pi)

//operatorss
/*
arithmatic operators   ==>  +   -  *  **  /   %  ++  --
asignment operators    ==>  +=   -=   *=   **=   /=    %= 
comparison operators   ==>  == ===    >  <  >=  <=  >==  <== != !==  ?:  
logical operators      ==>  &&   ||   !
bitwise operators      ==>   &     ~      !     ^    >>   <<    >>>      <<< 
special  values  ==> NaN    Undefined    Null   Infinity 


typeof function

*/



//javascript input


// //this is not recomandable in websit  please avoid this in web 

// let name  = prompt('Enter your name')
// console.log('your name' , name)


//let num = prompt('Entera a number')
//console.log(num+12)  // 123+12    op  =  12312
//console.log(Number(num)+12)  //     123+12   op =    1245


//new changes


//geting elements 


// let message =  document.getElementById('message');
// message.innerHTML =' Your Are seeing in js ';


// role a dice 
// function roledice() {
//     let dice =Math.floor( Math.random() * 6) +1;
//     console.log(dice)
//     let result = document.getElementById('dice')
//     return  result.innerHTML = " The Dice Number is " +dice ; 

// }

//Get a random character 
// function rand(){
//     let ran= Math.floor(Math.random()*24)+1
//     return String.fromCharCode(ran+97)
// }

//limited character to the lel=ngth of the word 

// var name='harikrishnan'
// function rand(name){
//     let len=name.length
//     let ran= Math.floor(Math.random()*len)+1
//     return String.fromCharCode(ran+97)
// }

// Template litrel

// let name='hari'
// let lname='johnson'
// let city ='ooty'

// console.log(`${name} ${lname} is in ${city}`)




// array
 let city = ['ooty', 'chennai','madurai']
console.log(city)

//index
console.log(city[1])

//length

console.log(city.length)


// minues indexing

console.log(city.length-1)

//array of array
sec=[1,2,,2,3,4,4,5,['hari', 'john']]

console.log(sec)


//matrix
let mat = [[1,2],[2,3],[3,4],[4,5]]
console.log(mat)
console.log(mat[0][1])


let arr =['a', 'b', 'c', 'd', 'e', 'f']

arr.push('g')   //add arr in last elemet
arr.push('g')
  
arr.pop()   //remove the last element
console.log(arr)

arr.shift()  // removee the first element

console.log(arr)


arr.unshift('a') // redo the same thing in shift 
console.log(arr)

//delete    not rcomandable
// delete arr[2]

arr.slice(2,1)  // remove the paticular element

console.log(arr)
arr.slice(1,1,"n") //delete and replace

console.log(arr)
arr.slice (1,2,'r','n') // delete and replace in two element

console.log(arr)
arr.slice(1,0,'b') //add new element in paticular index 



console.log(arr.slice(1,3)) // get midel indexed elemets

arr.reverse() //rever the arr

console.log(arr)



let ne='a,s,f,d,g,gg,eget,dgeg,'   // to make a string inti array
let ne1=ne.split(',')  //based on comma ,

console.log(ne1)


let fa=[1,2,3,4]
let se=[6,7,8,9,10]

let join=[[fa][se]]
console.log(join)  //return two deimentional array

let jo = fa.concat(se) // it will return single array
console.log(jo)


let joint = [ ...fa,...se ]
console.log(joint) //  way of joint array

let pwd=true;
if (pwd) {
    console.log('your loged in')
}
else {
    console.log('your not logged in')
}

//conditional operator

//ternary operator

let a=90,b=30
max = a>b?a:b;

console.log(max)
























































































































