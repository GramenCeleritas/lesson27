//////////////////// home work for 24 lesson //////////////////////




function calculation() {
    let num1 = parseFloat(prompt("Enter first numberito please"))

    let num2 = parseFloat(prompt("Enter second numberito please"))

    if (isNaN(num1) || isNaN(num2)) {
        alert('you have entered not a number for calculation')
        console.log('Error you need to enter numbers to calculate')
        } else {
    function multiplier(num1, num2) {
        return num1 * num2 
    }

    function difference(num1, num2) {
        if (num2 > num1) {
            alert(window.confirm('Your first number is smaller then second, do you really want to continue?'))
            return num1 - num2;
        } else {
        return num1 - num2;
        }
    }

    function sum(num1, num2) {
        return num1 + num2;
    }

    function division(num1, num2) {
        if (num2 === 0) {
            alert('Devision by zero is not allowed at this time')
            return 'Division failed'
        } else {
            return num1 / num2;
        }
    }
    let multiplierResult = multiplier(num1, num2);
    let differenceResult = difference(num1, num2);
    let sumResult = sum(num1, num2);
    let divisionResult = division(num1, num2);
    console.log(`The myltiply result is: ${multiplierResult}.\n\rThe difference result is: ${differenceResult}.\n\rThe sum of numbers is: ${sumResult}.\n\rThe division of numbers are: ${divisionResult}`)
    return
    }
}

calculation();

//////////////// Function with arrey max and min numbers /////////////////////////


function findMaxNumber(){
    let b = [];

    for (i = 0; i < 51; i++)

    b.push(i);
    
    if (b.length === 0) {
        return undefined;
    }

    b.push(-1500);
    b.push(-1750);

    let minValue = Infinity;
    let minValue2 = Infinity;
    let maxValue = -Infinity;
 
    for(i = 0; i < b.length; i++) {
        if (b[i] < minValue) {
            minValue2 = minValue;
            minValue = b[i];
        } else if (b[i] < minValue2) {
            minValue2 = b[i];
        }
    }

    for(i = 0; i < b.length; i++) {
        if (b[i] > maxValue) {
            maxValue = b[i]
        }
    }

    console.log(minValue);
    console.log(minValue2);
    console.log(maxValue);

}

findMaxNumber()


