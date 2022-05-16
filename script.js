 const country = "The Netherlands";
const continent = "Europe";
let population = 17.44;
console.log(country);
console.log(continent);
console.log(population);

//const isIsland = false;
//const language = "Dutch";

//console.log(country);
//console.log(continent);
//console.log(population);
//console.log(isIsland);

let theNetherlandsHasMorePeopleThenFinland = true;
let theNetherlandsHasLessPeopleThenAverage = true;

let description = "Portugal is in Europe, and its 11 million people speak portuguese";

const markMass = 78;
const heightMark = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / heightMark ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const whohigherBMI = markBMI > johnBMI;
console.log(markBMI);
console.log(johnBMI);
console.log(whohigherBMI);

const firstName = "Jared"; 
const lastName = "Chu";
const birthyear = 2003;
const year = 2022;

const introduction = "im" + firstName + "a" + (year - birthyear) + 'years old';

console.log(introduction);

const pg = "Portugal";
const eu = "Europe";
const milli = "million";
const port = "portuguese";
const ppl = "people";
const spe = "speak";

const intro2 = pg + "is in" + eu + "and its 11" + milli + ppl + spe + port;
console.log(intro2);




if (population > 33) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(
      `${country}'s population is ${33 - population} million
      below average`,
    );
  }

  if (markBMI > johnBMI) {
      console.log("Mark's bmi ${markBMI} a higher bmi!")
  } else {
      console.log("John has a higher bmi!")
  };

  /*const numNeighbours = Number(
    prompt('How many neighbour countries does your country have?'),
    );
    if (numNeighbours === 1) {
      console.log('Only 1 border!');
    } else if (numNeighbours > 1) {
      console.log('More than 1 border');
    } else {
      console.log('No borders');
    }
    */


    console.log('9' - '5');
    console.log('19' - '13' + '17');

    const language = "english";
    const isIsland = true;

    if (language === 'english' && population < 50 && !isIsland)
{
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}