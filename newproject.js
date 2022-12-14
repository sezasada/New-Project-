
let number = [ 3, 4, 5, 19, -5];

console.log('In New Array')

for( let x = 0; x < number.length; x++ ){
    if( number[x] > 0) {
         console.log('Added', number[x]);
    }
     if( number[x] == 0) {
         console.log('No change');
    }
     if( number[x] < 0) {
         console.log('Removed', number[x]);
    }
} 
console.log('Add All Values Together'); 


number.push(14);

number.pop(5);

let total = 0;
for( let z = 0; z < number.length; z++) {
    sum = total += number[z];
}
console.log(sum);

console.log('Remove All Items');

function empty()  {
    for ( let x = 0; x = number.length; x++) {
        console.log(number.pop());
    }
} 
empty();
console.log(number);

console.log('Interface That Adds and Subtracts Values');


$( document ).ready(main);

let numbers = [];
let moreNumbers = [];
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
console.log(addNumbers(10, 5));

function subtractNumbers(numberOne, numberTwo){
    console.log('Subtracting numbers:', numberOne, 'and', numberTwo);
    const numberObject = {
        valueOne: numberOne,
        valueTwo: numberTwo,
        answer: numberOne - numberTwo
    }
    console.log(numberOne - numberTwo);
    moreNumbers.push(numberObject);
}
console.log(subtractNumbers(4, 2));

function main(){
    $( '#resultButton' ).on( 'click', sayNumbers );
    $( '#subtractButton' ).on( 'click', subNumbers );
}   

function subNumbers(){
    let c = parseInt(prompt( 'Enter First Number' ));
    let d = parseInt(prompt( 'Enter Second Number' ));
    console.log(moreNumbers.push(subtractNumbers(c, d)));
}
console.log(moreNumbers);
function sayNumbers(){
    let a = parseInt(prompt( 'Enter First Number' ));
    let b = parseInt(prompt( 'Enter Second Number' ));
    console.log(numbers.push(addNumbers(a, b)));
    console.log('Answer is:', a += b);
}
console.log(numbers);