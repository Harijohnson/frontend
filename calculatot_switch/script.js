
result = document.createElement('div');
result.id ='result';
document.getElementById('wrapper').appendChild(result);
function calculate(){
    let  calc= document.getElementById("calculate").value
    let arr=[]
    // console.log('this i s the type of cal ' + calc)
    if (calc.includes('+')){
        // calc.split('+')
        arr.push(calc.split('+'))
        let total =  Number(arr[0][0])+Number(arr[0][1] )
        result.innerHTML =' Here is thee Total '+total
        // console.log(arr)
    }
    if (calc.includes('-')){
        arr.push(calc.split('-'))
        let total =  Number(arr[0][0])-Number(arr[0][1] )
        result.innerHTML =' Here is thee Total '+total
    }
    if (calc.includes('*')){
        arr.push(calc.split('*'))
        let total =  Number(arr[0][0])*Number(arr[0][1] )
        result.innerHTML =' Here is thee Total '+total
    }
    if (calc.includes('/')){
        arr.push(calc.split('/'))
        let total =  Number(arr[0][0])/Number(arr[0][1] )
        result.innerHTML =' Here is thee Total '+total
    }
    if (calc.includes('%')){
        arr.push(calc.split('%'))
        let total =  Number(arr[0][0])%Number(arr[0][1] )
        result.innerHTML =' Here is the Total '+total
    }
    

}




let cal = document.querySelector("#cal")
console.log(cal)
cal.addEventListener("click", calculate);






// let result = document.createElement('div')
// result.id = 'result';
// result.style.color ='red';
// document.getElementById('wrapper').appendChild(result)


// function displayStats(){
//     const input = document.querySelector('#input');
//     // console.log('good')

//     let city = input.options[input.selectedIndex].value
//     console.log(city)
//     let population=0,lit=0,language=""
//     switch(city) {
//         case 'Ooty':
//             population = 200000
//             lit =98.0
//             language = 'Tamiil'
//             break
//         case 'Chenai':
//             population = 454350000
//             lit =78.8
//             language = 'English'
//             break
//         case 'Madurai':
//             population = 3453534
//             lit =87.0
//             language = 'Tamiil'
//             break
//         case 'Coimbatore':
//             population = 34566465
//             lit =89.0
//             language = 'Kanada'
//             break
//         case 'Ramanatha Puram':
//             population = 87768678
//             lit =76.0
//             language = 'Tamiil'
//             break
//     }
//     let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and litracye rate of ${lit} %`
//     // console.log(text)

   
//     document.getElementById('result').innerHTML = text


// }






// const button = document.querySelector('button');
// //Evet listener
// button.addEventListener("click",displayStats);  // for above button added the event listener





































































































































