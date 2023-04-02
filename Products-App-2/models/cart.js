const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart{
    static addToCart(productId,productPrice){
        console.log('in');
        fs.readFile(p,(err,fileContent)=>{
            let cart = {products:[],totalPrice:0};
            if(!err && fileContent.length != 0){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(product => product.id === productId);
            console.log(existingProductIndex);
            let updatedProduct;
            if(existingProductIndex >=0){
                console.log('in2');
                updatedProduct = {...cart.products[existingProductIndex]};
                updatedProduct.qty++;
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
                console.log('in3');
                updatedProduct = {id:productId,qty:1};
                cart.products = [...cart.products,updatedProduct];
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(p,(JSON.stringify(cart)),(err)=>{
                if(err){
                    console.log(err);
                }
            })
        })
    }
}