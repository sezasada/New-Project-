$( document ).ready(main);

let numbers = [];
// empty array that will contain values being added from the interface.

function addNumbers(numberOne, numberTwo){
    console.log('Adding numbers:', numberOne, 'and', numberTwo);
    const numberObject = {
        valueOne: numberOne,
        valueTwo: numberTwo,
        answer: numberOne + numberTwo
    }
    console.log(numberOne + numberTwo);
    numbers.push(numberObject);
}
console.log(addNumbers(2, 4));


function main(){
    $( '#resultButton' ).on( 'click', sayNumbers );
}   

function sayNumbers(){
    let a = parseInt(prompt( 'Enter First Number' ));
    let b = parseInt(prompt( 'Enter Second Number' ));
    console.log(numbers.push(addNumbers(a, b)));
    console.log('Answer is:', a += b);
}
console.log(numbers);