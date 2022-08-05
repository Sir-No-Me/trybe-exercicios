let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

let stringResult =  '';

let j=0;

for(i in player){
    stringResult += ' ' + player[i];
    if(typeof player[i] == 'object' && typeof player[i].isArray === false){
        for(j in player[i]){
            stringResult += ' ' + player[i][j];
        }
    }
}

console.log(stringResult);
console.log('A jogadora ' + player.name + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
console.log('A jogadora possui ' + player['medals'].golden + ' medalhas de ouro ' + 'e ' + player.medals['silver'] + ' medalhas de prata');