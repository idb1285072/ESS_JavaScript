const stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

function time(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function production() {
  try {
    console.log("Production has started");

    await time(2000); // Step 2
    console.log("The fruit has been chopped");

    await time(1000); // Step 3
    console.log(
      `${stocks.liquid[0].toUpperCase()} and ${stocks.liquid[1]} Added`
    );

    await time(1000); // Step 4
    console.log("Start the machine");

    await time(2000); // Step 5
    console.log(`Ice cream placed on ${stocks.holder[1]}`);

    await time(3000); // Step 6
    console.log(`${stocks.toppings[0]} as toppings`);

    await time(2000); // Step 7
    console.log("Serve Ice cream");
  } 
  catch (error) {
    console.log("Customer left 😢");
  } 
  finally {
    console.log(`Thanks`);
  }
}

const order = (callProduction) => {
  console.log("Order Place");
  callProduction();
};

order(production);
