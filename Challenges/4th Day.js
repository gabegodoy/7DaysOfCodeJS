

var randomNumber = parseInt(Math.random() * 10+1)
var attempts = 0;


function verify (){

    var userNumber = document.getElementById('numberGuess').value;


    if (userNumber == randomNumber){
        document.getElementById('tip').innerHTML = '<strong>Success!</strong>'
        document.getElementById('tip').style.color = 'green'
        document.getElementById('tip').style.fontSize = '50px'
        document.getElementById('numberGuess').innerHTML = ' 000'
        for (var i = 0; i < 1; i++){
            attempts += 1}
    }

    else if (userNumber == ''){
        document.getElementById('tip').innerHTML = '<strong>Attention! <br> A number must be choosen</strong>'
        document.getElementById('tip').style.color = 'red'
        document.getElementById('tip').style.fontSize = 'large'

    }


    else if (userNumber < randomNumber){
        document.getElementById('tip').innerHTML = '<strong>TIP: </strong> The number drawn is <strong>higher!</strong>'
        document.getElementById('tip').style.color = 'black'
        document.getElementById('tip').style.fontSize = 'large'
        for (var i = 0; i < 1; i++){
            attempts += 1}
    }
    
    else if (userNumber > randomNumber){
        document.getElementById('tip').innerHTML = '<strong>TIP: </strong> The number drawn is <strong>lower!</strong>'
        document.getElementById('tip').style.color = 'black'
        document.getElementById('tip').style.fontSize = 'large'
        for (var i = 0; i < 1; i++){
            attempts += 1}
    }

    if (attempts == 3){
        if (randomNumber != userNumber){
        document.getElementById('tip').innerHTML = '<strong>You lost! <br> The number was ' + randomNumber + '!</strong>'
        document.getElementById('tip').style.color = 'red'
        document.getElementById('tip').style.fontSize = 'large'
        document.getElementById("verify").disabled = true;
        document.getElementById('tryAgain').style.display = 'block'
        }
    }

    console.log (userNumber, randomNumber)

    document.getElementById('attempts').innerHTML = attempts

}

function tryAgain (){

    randomNumber = parseInt(Math.random() * 10+1)
    attempts = 0
    document.getElementById('attempts').innerHTML = attempts
    document.getElementById('tryAgain').style.display = 'none'
    document.getElementById('verify').disabled = false
    document.getElementById('tip').innerHTML = '<strong> * BOA SORTE * </strong>'
    document.getElementById('tip').style.color = 'black'
    document.getElementById('tip').style.fontSize = 'large'
    document.getElementById('numberGuess').value = 0
}

/* <strong>TIP: </strong> The number drawn is <strong id="tip"></strong> */