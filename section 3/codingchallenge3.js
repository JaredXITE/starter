const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    john.bmi = john.weight / john.height ** 2;
    return john.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.calcBMI);
console.log(mark.bmi);
console.log(mark["bmi"]);
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullname} BMI ${mark.bmi} is higher then ${john.fullname} BMI ${john.bmi} `
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullname} BMI ${john.bmi} is higher then ${mark.fullname} BMI ${mark.bmi} `
  );
}

const key = john.fullname == "John Smith" ? "weight" : "height";

console.log(john["fullname"]);
