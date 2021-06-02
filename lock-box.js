// import prompt-sync
const prompt = require('prompt-sync')();

//get input from user

const password = prompt('Enter Password:  ')
const numPassWord = (password);

//remember this pincode

const pinCode = '1234';

// output results for user

if(numPassWord === pinCode){
    console.log('success')
}
else if(numPassWord !== pinCode){
    console.log('failure')
}
