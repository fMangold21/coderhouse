class Cart{
    constructor() {
        this.products = [];
        this.total = 0;
    }
    addProduct(product){
        this.products.push(product)
        this.calculateTotal()
        this.renderPriceList()
        console.log(this)
    }
    calculateTotal(){
        let res = 0
        this.products.forEach(prod => {
            res += prod.price
        })
        this.total = res
        this.renderTotal()
    }
    emptyCart(){
        this.products = []
        this.total = 0
        console.log(this)
        this.renderPriceList()
        this.renderTotal()
    }
    renderPriceList(){
        let res = ''
        this.products.forEach(prod => {
            res += `<li>${prod.price}</li>`
        })
        document.getElementById('productPriceList').innerHTML = res
    }
    renderTotal(){
        document.getElementById('priceHeader').textContent = `Tu total es: ${this.total}`
    }
}

export {Cart};