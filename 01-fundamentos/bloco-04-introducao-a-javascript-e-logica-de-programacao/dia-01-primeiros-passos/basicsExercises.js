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

function convertPercentToNote(percent){
  if(percent >= 90){
    return 'A';
  }else if(percent >= 80){
    return 'B';
  }else if(percent >= 70){
    return 'C';
  }else if(percent >= 60){
    return 'D';
  }else if(percent >= 50){
    return 'E';
  }else{
    return 'F';
  }
}

function someEvenNumber(n1, n2, n3){//Constraint: use just one if struct...
  if(n1%2 == 0 || n2%2 == 0 || n3%2 == 0){
    return true;
  }
  return false;
}

function someOddNumber(n1, n2, n3){
  if(n1%2 != 0 || n2%2 != 0 || n3%2 != 0){
    return true;
  }
  return false;
}

function profitAtThousandSales(cost, salePrice){
  if(cost < 0 || salePrice < 0)
    return 'Invalid input';
  // let taxProductCost = cost*0.2;
  return salePrice-(cost+(cost*0.2));
}

function netSalary(grossSalary){
  let tax;
  if(grossSalary <= 1556.94){
    tax = grossSalary*0.08;
  }else if(grossSalary <= 2594.92){
    tax = grossSalary*0.09;
  }else if(grossSalary <= 5189.82){
    tax = grossSalary*0.11;
  }else{
    if(grossSalary * 0.11 <= 570.88){
      tax = grossSalary * 0.11;
    }else{
      tax = 570.88;
    }
  }
  grossSalary -= tax;
  console.log(tax + ' ' + grossSalary);
  if(grossSalary <= 1903.98){
    tax = grossSalary + 0;
  }else if(grossSalary <= 2826.66){
    tax = grossSalary*0.075-142.80;
  }else if(grossSalary <= 3751.05){
    tax = grossSalary*0.15-354.80;
  }else if(grossSalary <= 4664.68){
    tax = grossSalary*0.225-636.13;
  }else{
    tax = grossSalary*0.275-869.36;
  }
  return grossSalary-tax;
}

console.log(netSalary(1700));