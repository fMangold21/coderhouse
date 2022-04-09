import { Cart } from './classes/cart.js'
import { Product } from "./classes/product.js";

const cart = new Cart();

// while(true){
//     let productValue = prompt("Ingresa el valor de tu producto, cancela si no quieres agregar mas")
//     if (parseInt(productValue, 10)){
//         const prod = new Product("Prod", parseInt(productValue, 10))
//         cart.addProduct(prod)
//     }else{
//         break
//     }
// }

document.getElementById('emptyCartButton').addEventListener('click', () => cart.emptyCart())
document.getElementById('addProductButton').addEventListener('click', () => createProduct())

function createProduct(){
    const name = document.getElementById('pname').value
    const price = document.getElementById('pprice').value
    document.getElementById('pname').value = ''
    document.getElementById('pprice').value = 0
    if (name && parseInt(price, 10)){
        const product = new Product(name, parseInt(price, 10))
        cart.addProduct(product)
    }
}




