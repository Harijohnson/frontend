function fdRate(){

    let months = Number(document.getElementById('moths').value)
    let amt = Number(document.getElementById('amt').value)
    console.log(months)
    console.log(amt)
    // months
    // months  < 3   5.8 %
    //months  3>x<6  6.5 %
    //months  6>x< 9 6.8 %
    //months  x>10   7 %

    if (months < 3 ) {
        let total = ((amt/100) * 5.8)*months
        var result = document.getElementById('result');
        result.innerHTML =`Value FD of ${months} months and  ${amt} total income is ${total} `
        return  result
    }
    else  if (months >= 3 && months < 6  ) {
        let total = ((amt/100) * 6.5)*months
        var result = document.getElementById('result');
        result.innerHTML =`Value FD of ${months} months and  ${amt} total income is ${total} `
        return  result
    }
    else  if (months >= 6 && months < 10 ) {
        let total = ((amt/100) * 6.8)*months
        var result = document.getElementById('result');
        result.innerHTML =`Value FD of ${months} months and  ${amt} total income is ${total} `
        return  result
    }
    else  if (months >= 10 ) {
        let total = ((amt/100) * 7) * months
        var result = document.getElementById('result');
        result.innerHTML =`Value FD of ${months} months and  ${amt} total income is ${total} `
        return  result
    }

}
