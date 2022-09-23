/*
const acordando = () => console.log('Acordando!!');
const passo1 = () => console.log('Bora tomar café!!');
const dormir = () => console.log('Partiu dormir!!');
const doingThings = (thing) => thing();
doingThings(acordando);
*/

/*
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach(showEmailList); 
*/

/*
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (array) => array.find((element) => element % 5 === 0 && element % 3 === 0);
console.log(findDivisibleBy3And5(numbers));

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = (array) => array.find((element) => element.length === 5);
console.log(findNameWithFiveLetters(names));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
function findMusic(source, id) {
  return source.find((element) => element.id === id);
};
console.log(findMusic(musicas, '31031685'));
*/

/*
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => arr.some((element) => element == name);
console.log(hasName(names, 'Ana'));
*/

/*
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);
console.log(verifyAges(people, 18));
*/

/*
const gamers = [
  { name: 'Mateus', points: [65, 17, 10, 5, 50, 40, 10] },
  { name: 'José', points: [9, 5, 7, 1, 20] },
  { name: 'Ana', points: [32, 20, 8, 90, 104] },
  { name: 'Cláudia', points: [0, 100, 10, 10, 5, 20] },
  { name: 'Bruna', points: [3, 20, 10, 10, 10] },
];
gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((e) => pointsA += e);
  b.points.forEach((e) => pointsB += e);
  return pointsB - pointsA;
});
console.log(gamers);

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.age - a.age);
console.log(people);
*/
