let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;
let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Which topping would you like?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log(" a ");
  console.log(" b ");
  console.log(" c ");

  await toppings_choice();
  console.log(" d ");
  console.log(" e ");
}

kitchen();

console.log("doing dishes");
console.log("cleaning tables");
console.log("taking other orders");
