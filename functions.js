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

const age3 = smartAge3(2003)
console.log(age3);

