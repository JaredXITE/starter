const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, AvgKoalas) {
  if (avgDolphins >= 2 * AvgKoalas) {
    console.log("Dolphins win!");
  } else if (AvgKoalas >= 2 * avgDolphins) {
    console.log("Koalas win!");
  } else {
    console.log("no one wins");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(50, 500);
