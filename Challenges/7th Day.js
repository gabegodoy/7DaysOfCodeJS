
var firstNum = ''
var secondNum = ''
var operation = ''


//screenDisplay
var operationScreen = document.querySelector('.operation');

var clicked = document.querySelectorAll(".numbers-operators button");
for (var i = 0; i < clicked.length; i++) {
    clicked[i].addEventListener("click", function (e) {

        if (operation != ''){
            switch (this.value) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':        
                case '8':
                case '9':
                case '0':
                case '.':   
                    firstNum += this.value;
                    break;
     
            }
        }
        else {
            switch (this.value) {
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':        
                case '8':
                case '9':
                case '0':
                case '.':   
                    secondNum += this.value;
                    break;
                case '+':
                case '-':
                case '*':
                case '÷':
                case '%':
                    operation = this.value;
                    break;    
            }
        }
        operationScreen.innerHTML = secondNum + operation + firstNum
    })
}


//Clear button
var cleanBtn = document.querySelector('.clean-btn');

cleanBtn.addEventListener("click", function (c) {
    operationScreen.innerHTML = '';
    resultScreen.innerHTML = '';
    operation = ''
    firstNum = ''
    secondNum = ''
    result = ''
})

var result = ''
var resultScreen = document.querySelector('.operation-result')

//Result Button
function test (){
    
    switch (operation) {
        case '+':
            result = parseFloat(secondNum) + parseFloat(firstNum) ;
            break;        
        case '-':
            result = secondNum - firstNum;
            break;        
        case '*':
            result = secondNum * firstNum;
            break;        
        case '÷':
            result = secondNum / firstNum;
            break;        
        case '%':
            result = (secondNum /100) * firstNum;
            break;        
    }

    resultScreen.innerHTML = result

    }