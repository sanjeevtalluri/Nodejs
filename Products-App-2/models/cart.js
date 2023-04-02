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
            const cart = {products:[],totalPrice:0};
            console.log(fileContent);
            if(!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.find(product => product.id === productId);
            let updatedProduct;
            if(existingProductIndex){
                updatedProduct = {...existingProductIndex};
                updatedProduct.qty++;
                cart.products[existingProductIndex] = updatedProduct;
            }
            else{
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