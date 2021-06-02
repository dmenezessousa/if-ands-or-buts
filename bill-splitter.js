// import prompt-sync
const prompt = require('prompt-sync')();
const billValue = prompt('How much was the bill?.  ')
const person1 = prompt('Enter how much Person 1 paid: ');
const person2 = prompt('Enter how much Person 2 paid: ');

//get input from user
const numPerson1 = Number(person1);
const numPerson2 = Number(person2);
const rest1 = (billValue / 2);
const rest2 = (billValue / 2);

if(person1 > person2){
    console.log('Person2 owes to Person1: $', rest1 - numPerson2 );
} else if(person1 < person2){
    console.log('Person 1 owes to Person2: $',rest2 - numPerson1 )
}




