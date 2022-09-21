let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};
let food = ['hamburguer', 'bife', 'acarajé'];

for (const value in food) {
  console.log(value);
};

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for(i in car){//"By omitting let, const, or var in non-strict mode, you create a property on the global object." "Avoid that." "Is the same as"
  window.x = 5;
  console.log(i + car[i]);
}

for (const value of food){
   console.log(value);
};

// for(let value of names){  Not work without Symbol.iterator property
//   console.log('Olá ' + value);
// }