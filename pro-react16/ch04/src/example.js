import additionFunction from "./sum";
import oddOnly, { sumValues } from "./sum";
import { multiply, subtract } from "./operations";
import { subtract as deduct } from "./operations";
import * as ops from "./operations";
import { asyncAdd } from "./async";

const myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");

const printName = (nameFunction, printFunction) =>
  printFunction(myFunc(nameFunction));

printName(function () { return "Adam" }, console.log);

function messageFunction(name, weather) {
  let message = `Hello, ${name}`;
  if (weather === "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = `It is ${weather} today`;
    console.log(message);
  }
  console.log(message);
}

messageFunction("Adam", "raining");

let myArray = [100, "Adam", true];

for (let i = 0; i < myArray.length; i++) {
  console.log(`Index ${i}: ${myArray[i]}`);
}
console.log("---");

myArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));

function printItems(numValue, stringValue, boolValue) {
  console.log(`Number: ${numValue}`);
  console.log(`String: ${stringValue}`);
  console.log(`Boolean: ${boolValue}`);
}
console.log("---");
printItems(...myArray);

console.log("---");
let myOtherArray = [200, "Bob", false, ...myArray];
myOtherArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));

let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log("---");
console.log(`Total value: $${totalValue.toFixed(2)}`);

let myData = {};
myData.name = "Adam";
myData.weather = "sunny";
console.log("---");
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

myData = {
  name: "Adam",
  weather: "sunny"
};
console.log("---");
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

let name = "Kim"
myData = {
  name,
  weather: "sunny"
};
console.log("---");
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

myData = {
  name: "Adam",
  weather: "sunny",
  printMessages: function () {
    console.log("---");
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
  printMessages1() {
    console.log("---");
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
  printMessages2: () => {
    console.log("---");
    console.log(`Hello ${myData.name}.`);
    console.log(`Today is ${myData.weather}.`);
  },
};
myData.printMessages2();

class MyClass {
  constructor() {
    this.name = "Adam";
    this.weather = "sunny";
  }
  printMessages = () => {
    console.log("---");
    console.log(`Hello ${this.name}.`);
    console.log(`Today is ${this.weather}.`);
  }
}
myData = new MyClass();
myData.printMessages();

let secondObject = {};
Object.assign(secondObject, myData);
secondObject.printMessages();

secondObject = { ...myData, weather: "cloudy" };
console.log(`myData: ${myData.weather}, secondObject: ${secondObject.weather}`);

const myDataBob = {
  name: "Bob",
  location: {
    city: "Paris",
    country: "France"
  },
  employment: {
    title: "Manager",
    dept: "Sales"
  }
}
function printDetails(data) {
  console.log("---");
  console.log(`Name: ${data.name}, City: ${data.location.city}, Role: ${data.employment.title}`);
}
printDetails(myDataBob);

function printDetails1({ name, location: { city }, employment: { title }}) {
  console.log("---");
  console.log(`Name: ${name}, City: ${city}, Role: ${title}`);
}
printDetails1(myDataBob);

let values = [10, 20, 30, 40, 50];
let total = additionFunction(values);
console.log(`Total: ${total}`);

total = sumValues(values);
console.log(`Total: ${total}`);

let odds = oddOnly(values);
console.log(`Total: ${total}, Odd Total: ${odds}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
console.log(`Deduct: ${deduct(1000, values)}`);
console.log(`Multiply: ${ops.multiply(values)}`);
console.log(`Subtract: ${ops.subtract(1000, values)}`);

asyncAdd(values).then(total => console.log(`Main Total: ${total}`));

async function doTask() {
  let total = await asyncAdd(values);
  console.log(`Main Total: ${total}`);
}
doTask();
