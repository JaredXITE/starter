//array example
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])]
const total = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log({ bill });
console.log({ tips });
console.log("total", total);


const mark = {
  fullname: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    mark.bmi = mark.weight / mark.height ** 2;
    return mark.bmi;
  }
};

const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    john.bmi = john.weight / john.height ** 2;
    return john.bmi;
  }
};

mark.calcBMI ();
john.calcBMI ();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullname} BMI ${mark.bmi} is higher then ${john.fullname} BMI ${john.bmi} `)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullname} BMI ${john.bmi} is higher then ${mark.fullname} BMI ${mark.bmi} `)
}

