function converter() {
    console.log("WELCOME TO CURRENCY CONVERTER!\n")
    const input = require('sync-input');
    
    const currencies = {
        // exchange rates for currency we have
        USD: 1,
        GBP: 1.25,
        EUR: 1.1,
        JPY: 0.009,
        AUD: 0.75,
        CAD: 0.78,
        CHF: 1.05
    }
    console.log("you can convert:")
    console.log(Object.keys(currencies).join(", "))
    
    currency = input('What currency would you like to convert: ')
}

converter()
