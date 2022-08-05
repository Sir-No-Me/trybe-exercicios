let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
}

let stringResult =  '';

let j=0;

for(i in player){
    stringResult += ' ' + player[i];
    if(typeof player[i] == 'object'){
        for(j in player[i]){
            stringResult += ' ' + player[i][j];
        }
    }
}


console.log(stringResult);