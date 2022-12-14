

let numbers = [];
// empty array that will contain values being added from the interface.

function addNumbers(numberOne, numberTwo){
    console.log('Adding numbers:', numberOne, numberTwo);
    const numberObject = {
        valueOne: numberOne,
        valueTwo: numberTwo,
    }
    numbers.push(numberObject);
    return numberOne + numberTwo;
}
console.log(numbers);
console.log('Answer is', addNumbers(2, 4));
console.log(numbers);