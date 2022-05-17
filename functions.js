//declaration examples

//expression examples








// function examples




function describeCountry(country, population, capitalCity) {
    return `${country} has ${population}  million people and it's capital city is ${capitalCity}`;
}

const descNL = describeCountry('The Netherlands', 17, 'Amsterdam');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descFinland, descGermany, descNL);
