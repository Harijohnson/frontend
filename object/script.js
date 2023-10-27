let item= {
    name:'acer',
    price:56000,
    quantity:1,  
    buy: function (){
        console.log('item add to cart with function ');
    },

    addToCart(){
        console.log('item add to cart without function');
    }
}
console.log(item)

console.log(item.buy())
console.log(item.addToCart())
// creaing an object
let item2= new Object()
item2.name = 'caherger'
item2.price = 700
item2.quantity = 1

console.log(item2)

console.log(item.name)  //acer
item.price=12  //price =12
item.size =17  // add new property
console.log(item)


// squre bracket notation

console.log(item['price'])  //price =12
item['size']=13  //change  the size of the product





let user ={
    user_name : 'hari',
    email:'hari@gmail.com',
    password:'123445678',
    det(){
        console.log('new things');
    }
}

console.log(user) //

user.det()






















