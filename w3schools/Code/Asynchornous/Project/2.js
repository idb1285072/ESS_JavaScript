const stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

function time(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let production = () => {
  time(0)
    .then(() => {
      console.log("Production has started");
      return time(2000); // Step 2
    })
    .then(() => {
      console.log("The fruit has been chopped");
      return time(1000); // Step 3
    })
    .then(() => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
      return time(1000); // Step 4
    })
    .then(() => {
      console.log("Start the machine");
      return time(2000); // Step 5
    })
    .then(() => {
      console.log(`Ice cream placed on ${stocks.holder[1]}`);
      return time(3000); // Step 6
    })
    .then(() => {
      console.log(`${stocks.toppings[0]} as toppings`);
      return time(2000); // Step 7
    })
    .then(() => {
      console.log("Serve Ice cream");
    })
    .catch(() => {
      console.log("Customer left 😢");
    })
    .finally(() => {
      console.log("Thanks");
    });
};

const order = (callProduction) => {
  console.log("Order Place");
  callProduction();
};

order(production);
