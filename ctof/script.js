function convert(){
    let cel =Number(document.getElementById("input").value);
    // console.log(cel);
    let fer = cel   *  (9/5)  + 32
    console.log(fer);
    let result = document.getElementById("result");
    // console.log(result);

    if  (fer !== 'NaN'){
    return result.innerHTML = fer.toFixed(2) + "  Fahrenheit ";
    }
    else{
        return result.innerHTML = "Not applicable in here tru some another number.";
    }
}