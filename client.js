const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function longTermBonus(employeeNumber) {
  if (employeeNumber<10000){
    return 5;
  }
  return 0;
}//end longTermBonus

console.log('should be 5:', longTermBonus(1234));
console.log('should be 0:', longTermBonus(12345));
console.log('should be 0:', longTermBonus(10000));



function employeeIncome(annualSalary) {
  if (annualSalary > 65000) {
    return -1;
  }
  return 0
}//end employeeIncome

console.log('should be  0:', employeeIncome(6500));
console.log('should be  0:', employeeIncome(65000));
console.log('should be  -1:', employeeIncome(650000));

function employeeRatingBonus(reviewRating) {
  if (reviewRating<= 2){
    return 0;
  }
  else if( reviewRating === 3){
    return 4;
  }
  else if(reviewRating === 4){
    return 6;
  }
  else if( reviewRating === 5){
    return 10;
  }
}//end employeeRatingBonus

console.log('should be 0:', employeeRatingBonus(1));
console.log('should be 0:', employeeRatingBonus(2));
console.log('should be 3:', employeeRatingBonus(3));
console.log('should be 6:', employeeRatingBonus(4));
console.log('should be 10:', employeeRatingBonus(5));

function bonusCap(employeeRatingBonus, longTermBonus, employeeIncome) {
  let bonusPer = employeeRatingBonus + longTermBonus + employeeIncome;
  if (bonusPer > 13) {
    bonusPer = 13;
  }
  if (bonusPer < 0) {
    bonusPer = 0;
  }
  return bonusPer;
}//end bonusCap

console.log('should be 13:', bonusCap(14, 0, 0));
console.log('should be 13:', bonusCap(13, 0, 0));
console.log('should be 0:', bonusCap(-1, 0, 0));
console.log('should be 10:', bonusCap(10, 0, 0));



function totalBonus(employeeNumber, annualSalary, reviewRating) {
  let bonusPer
}


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
