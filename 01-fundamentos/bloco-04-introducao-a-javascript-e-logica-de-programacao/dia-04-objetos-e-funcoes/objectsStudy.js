let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

let stringResult =  '';

let j=0;

for(let i in player){
  stringResult += ' ' + player[i];
  if(typeof player[i] == 'object' && Array.isArray(player[i]) == 'false'){//Not working yet
      for(j in player[i]){
          stringResult += ' ' + player[i][j];
      }
  }
}

// for(key in player){
//     stringResult += ' ' + key;
//     if(typeof key == 'object' && typeof Array.isArray(key) == 'false'){
//         for(j in key){
//             stringResult += ' ' + key[j];
//         }
//     }
// }

console.log(stringResult);
console.log('A jogadora ' + player.name + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
console.log('A jogadora possui ' + player['medals'].golden + ' medalhas de ouro ' + 'e ' + player.medals['silver'] + ' medalhas de prata');