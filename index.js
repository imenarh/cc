function converter() {
    console.log("\n");
    console.log("WELCOME TO CURRENCY CONVERTER!\n");
    const input = require("sync-input");

    const pairs = {
        // exchange rates for currency we have
        GBP: 1.34,
        CHF: 1.26,
        EUR: 1.17,
        CAD: 0.72,
        AUD: 0.68,
        JPY: 0.0063,
        RWF: 0.00069,
    };
    console.log("you can convert your USD to:");
    console.log(Object.keys(pairs).join(", "));

    let currency = input(
        "\nWhat currency would you like to convert into USD: ",
    ).toUpperCase();

    if (!Object.keys(pairs).includes(currency)) {
      console.log("\nERROR: You entered an unsupported Currency!")
      console.log('\nEnter a currency ticker from:');
      console.log(Object.keys(pairs).join(", "), "\n");
      process.exit(0)  
    }

    if (currency === 'USD') {
        console.log('\nGreat you already have US dollars!');
        process.exit(0);
    }

    if (currency === "USD") {
        console.log("\nGreat you already have US dollars!");
        process.exit(0);
    }

    let amount = input(`\nEnter the amount of ${currency} you want to convert: `);

    let converted = Number(amount) * pairs[currency]

    console.log(
        `\n${amount} converted from ${currency} to USD is: ${converted}.\n`,
    );
}

converter();
