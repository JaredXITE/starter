//declaration examples
function smartAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = smartAge1(2003);
console.log(age1);

//expression examples
const smartAge2 = function (birthYear) {
  return 2022 - birthYear;
}

const age2 = smartAge2(2003);
console.log(age2); 

//arrow function example
const smartAge3 = (birthYear) => 2022 - birthYear 
const smartAge4 = (birthYear) => {
  return 2022 - birthYear;
}

const age3 = smartAge3(2003)
console.log(age3);

// functions example

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

let fruits = fruitProcessor(5, 0)
console.log(fruits);
fruits = fruitProcessor(9, 0)
console.log(fruits); 


//calling functions example

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
  console.log(juice);
  return juice;
}
console.log(fruitProcessor (4, 7))


const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49); 

const checkWinner = function(avgDolphins, AvgKoalas) {
  if (avgDolphins >= 2 * AvgKoalas) {
    console.log("Dolphins win!");
  } else if (AvgKoalas >= 2 * avgDolphins) {
    console.log("Koalas win!")
  } else {
    console.log("no one wins")
  }
} 
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(50, 500);


