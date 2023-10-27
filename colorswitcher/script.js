
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let code= document.querySelector('#colorcode')
let click_me= document.querySelector('#clic')
click_me.addEventListener('click',change)   

function change(){
    let col= document.querySelector('#clic')
    // console.log('your good');
    let body= document.querySelector('body')
    // let colorGenarator = `#${randonColor()}${randonColor()}${randonColor()}${randonColor()}${randonColor()}${randonColor()}`
    let hexDec ='#'
    for (let i=1; i<=6; i++){
        hexDec += randonColor()
    }

    // console.log('hexDec ' , hexDec)

    let hexDecHtml = document.querySelector('#colorcode')
    hexDecHtml.innerHTML= hexDec
    // hexDecHtml.innerHTML= colorGenarator
    
    body.style.backgroundColor=hexDec
    // body.style.backgroundColor=colorGenarator
}
function randonColor(){
    let colorcode   = Math.floor(Math.random()*16);
    return hex[colorcode]
}

//let colorGenarator = `#${randonColor()}${randonColor()}${randonColor()}${randonColor()}${randonColor()}${randonColor()}`
//console.log(colorGenarator)