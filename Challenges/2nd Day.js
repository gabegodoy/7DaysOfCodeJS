/* 
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

return "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!" 

   * * *  O P C I O N A L  * * *

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?

*/

function validate (){
    var userName = document.getElementById('personalQuestions-name-input').value;
    var userAge = document.getElementById('personalQuestions-age-input').value;
    var userLanguage = document.getElementById('personalQuestions-language-input').value;

    console.log ('Hello ' + userName + ', you are ' + userAge + ' yo and already learning ' + userLanguage + '!')

    document.getElementById("personalQuestions").style.display = "none";
    document.getElementById("userLanguage").style.display = "block";
    document.getElementById("personalFeedback").innerHTML = 'Hello ' + userName + ', you are ' + userAge + ' years old and you are already learning ' + userLanguage + '!';
    document.getElementById('personalFeedback-question').innerHTML= 'Do you like to study ' + userLanguage + '?'

}

function feedback(){
    var personalFeedback = document.getElementById('personalFeedback-question-input').value.toUpperCase();

    if (personalFeedback == 'Y'){
        document.getElementById("positive").style.display = "block";
    }
    else if (personalFeedback == 'N'){
        document.getElementById("negative").style.display = "block";
    }
    else{
        document.getElementById("positive").style.display = "none";
        document.getElementById("negative").style.display = "none";
    }

    console.log (personalFeedback)


}