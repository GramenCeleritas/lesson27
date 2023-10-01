//////////////////// home work for 24 lesson //////////////////////


const resultObject = {}

let multiplierResult
let differenceResult
let sumResult
let divisionResult

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
            let trueFalse = window.confirm('Your first number is smaller then second, do you really want to continue?')
            if (trueFalse) {
                return num1 - num2;
            }
            
            
            
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
    multiplierResult = multiplier(num1, num2);
    differenceResult = difference(num1, num2);
    sumResult = sum(num1, num2);
    divisionResult = division(num1, num2);

    
    
    

    if (typeof multiplierResult == 'number' && typeof differenceResult == 'number' && typeof sumResult == 'number' && typeof divisionResult == 'number') {

        for (let i = 0; i < 1; i++) {
            if (differenceResult < 0) {
                showResultsOnPage(differenceResult, 'Difference result is:', '#EE2F2F')
                console.log('difference result is lesser then Infinity')
                
            } else {
                showResultsOnPage(differenceResult, 'Difference result is:', '#53B92D')
               
            }

            if (sumResult < 0) {
                showResultsOnPage(sumResult, 'Sum result is:', '#EE2F2F')
            } else {
                showResultsOnPage(sumResult, 'Sum result is:', '#53B92D')
            }
            showResultsOnPage(multiplierResult, 'Multiplying result is:', '#EE2F2F')
            showResultsOnPage(divisionResult, 'Division result is:', '#EE2F2F')
        }



    }

    console.log(`The myltiply result is: ${multiplierResult}.\n\rThe difference result is: ${differenceResult}.\n\rThe sum of numbers is: ${sumResult}.\n\rThe division of numbers are: ${divisionResult}`)
    return
    }

    
  

    }

    

    function showResultsOnPage(calculatedValue, nameOfOperationValue,colorForResult) {
        let newDiv = document.createElement('div');

        let resultText = document.createElement('h1')
        resultText.textContent = nameOfOperationValue
        document.body.appendChild(resultText)
        resultText.style.textAlign = 'center'
        resultText.style.fontFamily = 'Helvetica'
        resultText.style.borderTop = '0.2rem solid purple'
        resultText.style.padding = '2rem'


        
    
        document.body.appendChild(newDiv);

        newDiv.textContent = calculatedValue.toString()
        newDiv.style.textAlign = 'center';
        newDiv.style.margin = '20px auto auto auto'
        newDiv.style.borderRadius = '15px'
        newDiv.style.backgroundColor = colorForResult
        newDiv.style.width = '11rem'
        newDiv.style.padding = '1rem'
        newDiv.style.color = '#ffffff'
        newDiv.style.boxShadow = '0 8px 6px -6px black;'


        
    }








       

////////////// Function with arrey max and min numbers /////////////////////////
let b = [];

function findMaxNumber(){

    for (i = 0; i < 51; i++)

    b.push(i);
    
    if (b.length === 0) {
        return undefined;
    }

    

  
    b.push(-1600);
   
    b.push(300)
    
    console.log(b.join(' , '))
    console.log(JSON.stringify(b))
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

    console.log('minValue is: ' + minValue);
    console.log('second minValue is: ' + minValue2);
    console.log('maxValue is: ' + maxValue);

    let colorForResultMin = 0
    let colorForResultMax = 0

    if (minValue < 0 && minValue > -100) {
        colorForResultMin = '#EC0000'
    } else if (minValue < -100 && minValue > -500) {
        colorForResultMin = '#A00000'
    } else if (minValue < -500 && minValue > -1500) {
        colorForResultMin = '#640000'
    } else if (minValue < -1500) {
        colorForResultMin = '#3D0000'
    }

    if (maxValue > 0 && maxValue < 100) {
        colorForResultMax = '#42F000'
    } else if ( maxValue > 100 && maxValue < 500) {
        colorForResultMax = '#2EA800'
    } else if (maxValue > 500 && maxValue < 1500) {
        colorForResultMax = '#1E6C00'
    } else if (maxValue > 1500) {
        colorForResultMax = '#144700'
    }
    

    createElements(minValue,colorForResultMin, 'Minimal value of array')
    createElements(maxValue, colorForResultMax, 'Maximal value of array')
    


}




function createElements(textValue ,color, textForMinAndMax, idGen) {
    let newTextForValues = document.createElement('h1')
    document.body.appendChild(newTextForValues)
    newTextForValues.style.margin = '20px auto auto auto'
    newTextForValues.textContent = textForMinAndMax
    newTextForValues.style.textAlign = 'center'


    let newDivision2 = document.createElement('div')
    newDivision2.setAttribute('id', 'minMax' + idGen)
    document.body.appendChild(newDivision2)
    
    

    newDivision2.textContent = textValue.toString()
    newDivision2.style.textAlign = 'center';
    newDivision2.style.margin = '20px auto auto auto'
    newDivision2.style.borderRadius = '15px'
    newDivision2.style.backgroundColor = color
    newDivision2.style.width = '11rem'
    newDivision2.style.padding = '1rem'
    newDivision2.style.color = '#ffffff'
    newDivision2.style.borderTop = '0.2rem solid red'
}


// ///////////////////////////////////////////////
