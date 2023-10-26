function calculate(){
    var units  = Number (document.querySelector('#input').value)
    console.log(units)
    if (units <= 50 ){
        f_total = units * .75
        var result = document.getElementById('result');
        result.innerHTML =`Bill was ${total} RS`
        return  result
    }
    else if (units >= 50  && units < 150){
        units -= 50
        total = units * 1
        var result = document.getElementById('result');
        result.innerHTML =`Bill was ${total} RS`
        return  result
    }
    else if (units >= 150  && units < 250){
        units -= 50
        total = units * 1.30 + f_total
        var result = document.getElementById('result');
        result.innerHTML =`Bill was ${total} RS`
        return  result
    }
    else if (units >= 250 ){
        units -= 50
        total = units * 1.50
        var result = document.getElementById('result');
        result.innerHTML =`Bill was ${total} RS`
        return  result
    }
}