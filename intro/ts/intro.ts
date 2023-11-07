console.log("Hola desde ts 2");

class Drink3 {

    private name: string

    constructor(name: string) {
        this.name = name
    }

    info(): string {
        return this.name
    }
}

const drink3 = new Drink3("agua")
console.log(drink3.info());

// interface
interface Product {
    price: number;
    getPrice(): string;
}

// herancia
class Beer3 extends Drink3  implements Product {
    private alcohol: number;
    price: number;

    constructor(name: string, alcohol: number, price: number) {
        super(name)

        this.alcohol = alcohol
        this.price = price
    }

    getPrice(): string {
        return "$ " + this.price
    }

    info(): string {
        return super.info() + " " + this.alcohol
    }
}

//implementação de interface
class Snack implements Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): string {
        return "El precio es: $ " + this.price;
    }
}

const beer3 = new Beer3("erdinger", 8.5, 100);
console.log(beer3.info());

const products: Product[] = [
    new Beer3("corona", 4.5, 1),
    new Snack("papas", 0.5),
    new Beer3("heineken", 5, 1.2)
];

function getPrices(items: Product[]) {
    for(const item of items) {
        console.log(item.getPrice());
        
    }
}

getPrices(products)