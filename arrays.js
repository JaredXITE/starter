//array example

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log("bill", bill);
console.log("tips", tips);
console.log("total", total);


