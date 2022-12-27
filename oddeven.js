const userInput = window.prompt('Enter Number')

function checkEvenOdd (userInput){
    if(userInput %2 == 0){
        return ('Even Number');
    }
    return ('Odd Number');
}

/* 
 var isMyNumberEven = checkEvenOdd(2222);
console.log('My Number Is', isMyNumberEven) */

console.log(checkEvenOdd())
