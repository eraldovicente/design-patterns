class SaleContext {
    constructor(strategy) {
        this.strategy = strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    calculate(amount) {
        return this.strategy.calculate(amount)
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax
    }

    calculate(amount) {
        return amount + (amount * this.tax)
    }
}

class DiscountSaleStrategy {

    constructor(tax, discount) {
        this.tax = tax
        this.discount = discount
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount
    }
}

class ForeignSaleStrategy {
    
    calculate(amount) {
        return amount * this.getDollarPrice();
    }

    getDollarPrice() {
        return 20
    }
}

const regularSale = new RegularSaleStrategy(0.16)
const discountSale = new DiscountSaleStrategy(0.16, 3)
const foreignSale = new ForeignSaleStrategy()

const sale = new SaleContext(regularSale)

// console.log(sale.calculate(10));

// sale.setStrategy(discountSale)

// console.log(sale.calculate(10));

// sale.setStrategy(foreignSale)

// console.log(sale.calculate(10));
//----------------------//
//  Explicação prática //
//--------------------//

const data = [
    {
        name: "Erdinger Pikantus",
        country: "Alemania",
        info: "Ressaca certa",
        img: "https://cervejabox.vteximg.com.br/arquivos/ids/216017-1000-1000/Cerveja-alema-Erdinger-Pikantus-500ml.jpg?v=638130816170800000"
    },
    {
        name: "Corona",
        country: "Méxicana",
        info: "Tontura certa",
        img: "https://cervejabox.vteximg.com.br/arquivos/ids/216017-1000-1000/Cerveja-alema-Erdinger-Pikantus-500ml.jpg?v=638130816170800000"
    },
    {
        name: "Delirium Tremens",
        country: "Bélgica",
        info: "Vômito certo",
        img: "https://cervejabox.vteximg.com.br/arquivos/ids/216017-1000-1000/Cerveja-alema-Erdinger-Pikantus-500ml.jpg?v=638130816170800000"
    }
]

class InfoContext {

    constructor(strategy, data, element) {
        this.setStrategy(strategy)
        this.data = data
        this.element = element
    }

    setStrategy(strategy) {
        this.strategy = strategy
    }

    show() {
        this.strategy.show(this.data, this.element)
    }
}

class ListStrategy {

    show(data, element) {

        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                        <h2>${beer.name}</h2>
                        <p>${beer.country}</p>
                        </div>
                        <hr>`;
        }, "")
    }
}

class DetailedListStrategy {

    show(data, element) {

        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `<div>
                        <h2>${beer.name}</h2>
                        <p>${beer.country}</p>
                        <p>${beer.info}</p>
                        </div>
                        <hr>`;
        }, "")
    }
}

class ListWithImageStrategy {
    show(data, element) {
        element.innerHTML  = data.reduce((ac, beer) => {
            return ac + `<div>
                        <img width="10%" src="${beer.img}">
                        <h2>${beer.name}</h2>
                        </div>
                        <hr>`;
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailedListStrategy(),
    new ListWithImageStrategy()
]

const info = new InfoContext(new ListStrategy(), data, content)
info.show()

slcOptions.addEventListener("change", (event) => {
    const op = event.target.value
    info.setStrategy(strategies[op])
    info.show()
})