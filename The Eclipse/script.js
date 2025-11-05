let span1 = document.querySelector('#span1')
let span01 = document.querySelector('#span01')
let span2 = document.querySelector('#span2')
let span3 = document.querySelector('#span3')
let span4 = document.querySelector('#span4')
let span5 = document.querySelector('#span5')
let span6 = document.querySelector('#span6')
let span7 = document.querySelector('#span7')
let span8 = document.querySelector('#span8')
let span9 = document.querySelector('#span9')
let span10 = document.querySelector('#span10')
let span11 = document.querySelector('#span11')
let span12 = document.querySelector('#span12')
let span13 = document.querySelector('#span13')

let input = document.querySelector(".input"); 
let button = document.querySelector(".button");
let output = document.querySelector(".output");


function showSpan1(){
    span1.innerText = 'Eidolon Labs'
    span01.innerText = 'Eidolon Labs'
    span1.style.cursor = 'default'
    span1.style.color = 'white'
    span01.style.color = 'white'
}
function showSpan2(){
    span2.innerText = "1971"
    span2.style.cursor = 'default'
    span2.style.color = 'white'
}
function showSpan3(){
    span3.innerText = "studying brain and it's dark corners along with testing possible use of modern technologies on the brain"
    span3.style.color = 'white'
}
function showSpan4(){
    span4.innerText = "various tests while exploring the limits of human consciousness, exploring the ethical and psychological implications, potential methods directly altering brain structure and other psychological torture"
    span4.style.color = 'white'
}
function showSpan5(){
    span5.innerText = "dream manipulation"
    span5.style.color = 'white'
}
function showSpan6(){
    span6.innerText = "digital consciousness by transferring human consciousness into a computer"
    span6.style.color = 'white'
}
function showSpan7(){
    span7.innerText = "their neural patterns were uploaded to a virtual environment"
    span7.style.color = 'white'
}
function showSpan8(){
    span8.innerText = "Quantum Memory Cores"
    span8.style.color = 'white'
}
function showSpan9(){
    span9.innerText = "recall fragments of their erased memories, they reported seeing hallucinations and experiencing a sense of being watched. These hallucinations often escalated into encounters with a malevolent entity, referred to"
    span9.style.color = 'white'
}
function showSpan10(){
    span10.innerText = "manifistation of the collective fear and sufferring of the subjects, a digital"
    span10.style.color = 'white'
}
function showSpan11(){
    span11.innerText = "was born from the twisted depths of their psyches. It's a ghostly figure who stalks the corners of their minds, feeding on their fear and despair"
    span11.style.color = 'white'
}
function showSpan12(){
    span12.innerText = "it will slowely feed on their soul while trapping it in a nightmarish loop of their worst feers, in digital prison of "
    span12.style.color = 'white'
}
function showSpan13(){
    span13.innerText = "powered by the very fear it thrives on"
    span13.style.color = 'white'
}

span1.addEventListener('click', showSpan1);
span2.addEventListener('click', showSpan2);




button.addEventListener("click", function () {
    processInput()
})

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        processInput()
    }
})

function processInput(){
    let userInput = input.value;


    if(userInput === "The T0rment" || userInput === "T0rment"){
        showSpan11()
    }
    else if(userInput === '1971' ){

    }
    else if(userInput ===  ){

    }


}
