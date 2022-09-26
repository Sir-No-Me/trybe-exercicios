const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercício 1
// const newArray = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);

//Exercício 2
// const newArray = books.map((element) => {
//   const obj = {name: element.author.name, age: element.releaseYear - element.author.birthYear};
//   return obj;
// }).sort((iA, iB) => iA.age - iB.age);

//Exercício 3
// const newArray = books.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');

//Exercício 4
// const newArray = books.filter((element) => 2022 - element.releaseYear > 60).sort((iA, iB) => iA.releaseYear - iB.releaseYear);

//Exercício 5
// const newArray = books.filter((element) => {
//   if(element.genre === 'Ficção Científica' || element.genre === 'Fantasia'){
//     return element.author.name;
//   }
// }).map((element) => element.author.name).sort();

//Exercício 6
// const currYear = new Date().getFullYear();
// const newArray = books.filter((book) => currYear - book.releaseYear > 60).map((b) => b.name);

//Exercício 7
const newArray = books.filter((book) => book.author.name.match(/[A-Z]\.\s[A-Z]\.\s[A-Z]\./));//MY FIRT WELL SUCCED REGEX ATTEMPT

console.log(newArray);