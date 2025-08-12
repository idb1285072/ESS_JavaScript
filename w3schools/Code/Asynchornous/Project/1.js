const stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started");
    setTimeout(() => {
      console.log("The fruit has been chopped");
      setTimeout(() => {
        console.log(
          `${stocks.liquid[0].toUpperCase()} and ${stocks.liquid[1]} Added`
        );
        setTimeout(() => {
          console.log("Start the machine");
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`);
              setTimeout(() => {
                console.log("serve Ice cream");
              }, 2000); // Step 7
            }, 3000); // Step 6
          }, 2000); // Step 5
        }, 1000); // Step 4
      }, 1000); // Step 3
    }, 2000); // Step 2
  }, 0); // Step 1
};

const order = (callProduction) => {
  console.log("Order Place");
  callProduction();
};

order(production)