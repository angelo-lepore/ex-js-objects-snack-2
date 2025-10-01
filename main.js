// 🏆 Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = "Double Cheese Burger";
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name); // Double Cheese Burger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 1

// 🏆 Code Question 2

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // Salad
// console.log(secondBurger.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 3

// 🏆 Code Question 3

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   maker: {
//     name: "Anonymous Chef",
//     restaurant: {
//       name: "Hyur's Burgers",
//       address: "Main Street, 123",
//       isOpen: true,
//     },
//     age: 29,
//   },
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 9

// 🏆 Code Question 4

// const chef = {
//   name: "Chef Hyur",
//   age: 29,
//   makeBurger: (num = 1) => {
//     console.log(`Ecco ${num} hamburger per te!`);
//   },
// };

// const restaurant = {
//   name: "Hyur's Burgers",
//   address: {
//     street: "Main Street",
//     number: 123,
//   },
//   openingDate: new Date(2025, 3, 11),
//   isOpen: false,
// };

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? Spread(...) perchè copia la funzione
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché? structuredClone() perchè copia oggetti complessi tipo "date"

// 🎯 Code Question 5 (Bonus)

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

// 3 (hamburger, maker, restaurant)
const newRestaurant = { ...hamburger.maker.restaurant };
// 4 (+ restaurant)
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
// 5 (+ hamburger)
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // Chef Hyur
console.log(secondBurger.maker.name); // Chef Hyur
console.log(hamburger.maker.restaurant.name); // Hyur's II
console.log(secondBurger.maker.restaurant.name); // Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 5

// 🎯 Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? Spread(...) uno per ogni oggetto annidato

// 🎯 Snack (Bonus)

function deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  const copy = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value !== "object") {
      copy[key] = value;
    } else {
      copy[key] = deepCopy(value);
    }
  }
  return copy;
}

const chefCopy = deepCopy(chef);
console.log(chefCopy);

// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni).
// Usa l’oggetto di Code Question 6 come test.
// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).
