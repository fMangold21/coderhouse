import { Cart } from './classes/cart.js'
import { Product } from "./classes/product.js";

const cart = new Cart();
cart.taxPercentage = 22;

alert("Agrega productos a tu carrito")


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




