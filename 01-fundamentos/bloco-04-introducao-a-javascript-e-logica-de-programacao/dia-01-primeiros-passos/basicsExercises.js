function sum(a, b){
  return a+b;
}

function subtraction(a, b){
  return a-b;
}

function multiplication(a, b){
  return a*b;
}

function division(a, b){
  return a/b;
}

function moduleOperation(a, b){
  return a%b;
}

function biggestNumber(a, b){
  if(a==b)
    return 'equal numbers';
  return a>b ? a : b;
}

function biggestNumber(array){
  let biggest = -999999999999999;
  for(let i of array){
      biggest = i > biggest ? i : biggest;
  }
  return biggest;
}

function nostalgicAlgorithmToBiggestBetween3(a, b, c){
  if(a>b){
    if(a>c){
      return a;
    }
      return c;
  }else if(b>c){
    return b;
  }else if(c>b){
    return c;
  }
  return 'We have a complete equality here';
}

function magnitudeSignOrZero(number){
  if(number>0){
    return 'positive';
  }else if(number<0){
    return 'negative';
  }
  return 'zero';
}

function triangle(ang1, ang2, ang3){
  if(ang1 < 1 || ang2 < 1 || ang3 < 1){
    return 'invalid angle'
  }
  if(ang1+ang2+ang3 == 180){
    return true;
  }
  return false;
}

function howItMovesInChess(piece){
  let pieceStrictLwCase = piece.toString().toLowerCase();
  switch (pieceStrictLwCase){
    case 'knight':
      return console.log('Knight -> L-shaped movement with three steps on one axis and one on the other axis (no diagonally)');
    case 'bishop':
      return console.log('Bishop -> Diagonally');
    case 'king':
      return console.log('King -> One step at once, diagonally, vertically and horizontally');
    case 'queen':
      return console.log('Queen -> Diagonally, vertically and horizontally, still being able to override a defeated piece');
    case 'rook':
      return console.log('Rook -> Vertically or horizontally to a free square in a free square continuous sequence');
    case 'pawn':
      return console.log("Pawn -> One or two steps forward (vertically), diagonally across the opponent's back (en passant move)");
    default:
      return console.log("It's an invalid chess piece name...");
  }
}