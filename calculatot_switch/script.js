result = document.createElement('div');
result.id ='result';
document.getElementById('wrapper').appendChild(result);


function calculate(){
    let  calc= document.querySelector("#cal")
    if (calc.indexOf('+')){
        calc.split('+')
        console.log(cal)
    }
    if (calc.indexOf('-')){
        calc.split('-')
    }
    if (calc.indexOf('*')){
        calc.split('*')
    }
    if (calc.indexOf('/')){
        calc.split('/')
    }


}










let cal = document.querySelector("#cal")
cal.addEventListener("click", calculate() );






































































































































