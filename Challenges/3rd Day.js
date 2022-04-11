function search(){

}

function backEnd (){
    var name = document.querySelector('.userName-input').value;
    document.querySelector(".firstPage").style.display = "none";
    document.querySelector(".secondPage").style.display = "block";

    document.querySelector(".studyField-h3").innerHTML = 'back-end';
    document.querySelector(".printName").innerHTML = name;
    document.querySelector(".lang1").innerHTML = 'C#';
    document.querySelector(".lang2").innerHTML = 'Java';
}

function frontEnd (){
    var name = document.querySelector('.userName-input').value;
    document.querySelector(".firstPage").style.display = "none";
    document.querySelector(".secondPage").style.display = "block";

    document.querySelector(".studyField-h3").innerHTML = 'front-end';
    document.querySelector(".printName").innerHTML = name;
    document.querySelector(".lang1").innerHTML = 'React';
    document.querySelector(".lang2").innerHTML = 'Vue';
}


var noText = document.createElement('p');

function newTecnologies(){

    var outputMessage = document.querySelector('.outputMessage')
    var futureChoice = document.querySelector('.futureOptions').value;
    outputMessage.appendChild(noText)
    noText.innerHTML = ' '
    document.querySelector('.secondPageHeader').style.display = 'none'
    

    if (futureChoice == 'none'){
        noText.innerHTML = 'An option you must choose!'
        noText.style.color = ('red');
    }

    else if (futureChoice == 'continue'){
        noText.innerHTML = 'Great option! So then you can focus and specialize yourself more and more! <br> <strong>I have created a list of languages and courses focused on your profile, would you like to see that?</strong>'
        document.querySelector('.nextPage').style.display = 'block';
        noText.style.color = ('green');
    }

    else if (futureChoice == 'fullstack'){
        noText.innerHTML = 'Oh yeah! It is far away from being easy, but it definitely pays well! <br> <strong>I have created a list of languages and courses focused on your profile, would you like to see that?</strong>'
        document.querySelector('.nextPage').style.display = 'block';
        noText.style.color = ('green');
    }
    
}

function nextPage(){
    var futureChoice = document.querySelector('.futureOptions').value;
    var languageOptionsFront = document.querySelector('.languageOptionsFront');
    var languageOptionsBack = document.querySelector('.languageOptionsBack');


    if (futureChoice == 'continue'){
        if (document.querySelector(".studyField-h3").textContent == 'front-end'){
            languageOptionsFront.style.display = 'block';
            languageOptionsBack.style.display = 'none';
        }
        else if (document.querySelector(".studyField-h3").textContent == 'back-end'){
            languageOptionsBack.style.display = 'block';
            languageOptionsFront.style.display = 'none';
        }
               
    }
    else if (futureChoice == 'fullstack'){
        if (document.querySelector(".studyField-h3").textContent == 'front-end'){
            languageOptionsBack.style.display = 'block';
            languageOptionsFront.style.display = 'none';
        }
        else if (document.querySelector(".studyField-h3").textContent == 'back-end'){
            languageOptionsFront.style.display = 'block';
            languageOptionsBack.style.display = 'none';
        }
               
    }
}

function searchBack (){

    var langInputBack = document.getElementById('langInputBack').value;
    var btn = document.querySelector('.btnLinkBack');

        btn.href = "https://www.alura.com.br/busca?query="+langInputBack;     
}

function searchFront (){

    var langInputFront = document.getElementById('langInputFront').value;
    var btn = document.querySelector('.btnLinkFront');

        btn.href = "https://www.alura.com.br/busca?query="+langInputFront;     
}