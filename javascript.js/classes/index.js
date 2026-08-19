// class = provides a more structured and cleaner way to 
//         work with objects compared to traditional constructor function

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 25.70);

product1.displayProduct();