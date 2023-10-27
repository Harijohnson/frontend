function convert(){

let  cm= Number(document.getElementById('input').value);
// console.log(cm);

// cm=cm/2.54

let inch = cm/2.54;

let op = document.getElementById('result');
return op.innerHTML = inch.toFixed(2) + '  Inches';
}
