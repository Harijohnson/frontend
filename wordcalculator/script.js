function count(){

    let words = document.getElementById("textarea").value;
    // console.log(words);
    let count = words.split(" ")
    count = count.length
    // console.log(count)
    let result = document.getElementById("result")
    result.innerHTML =  'Total words  '+ count;
    return  result
}