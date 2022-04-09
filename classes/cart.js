class Cart{
    constructor() {
        this.products = [];
        this.subtotal = 0;
        this.tax = 0;
        this.total = 0;
        this.taxPercentage = 0;
    }
    addProduct(product){
        this.products.push(product);
        this.calculateTotals();
        let listIem = document.createElement("li");
        listIem.innerHTML = `<strong>${product.name}</strong>: ${product.price}`;
        document.getElementById('productPriceList').append(listIem)
    };
    calculateTotals(){
        let subtotal = 0;
        this.products.forEach(prod => {
            subtotal += prod.price;
        })
        this.subtotal = subtotal;
        this.tax = Math.round((this.taxPercentage / 100) * subtotal);
        this.total = Math.round((this.taxPercentage / 100 + 1) * subtotal);
        this.renderTotal();
    }
    emptyCart(){
        this.products = [];
        this.subtotal = 0;
        this.tax = 0;
        this.total = 0;
        this.renderPriceList();
        this.renderTotal();
    }
    renderPriceList(){
        let res = ''
        this.products.forEach(prod => {
            res += `<li>${prod.price}</li>`
        })
        document.getElementById('productPriceList').innerHTML = res
    }
    renderTotal(){
        document.getElementById('subtotalHeader').textContent = `Subtotal: ${this.subtotal}`
        document.getElementById('taxHeader').textContent = `IVA: ${this.tax}`
        document.getElementById('priceHeader').textContent = `Tu total es: ${this.total}`
    }
}

export {Cart};