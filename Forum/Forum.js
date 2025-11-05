let search = document.querySelector('.search')
let menu = document.querySelector('.menu')
let login = document.querySelector('.login')
let more = document.querySelector('#more')


let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let button4 = document.querySelector('#button4')
let button5 = document.querySelector('#button5')
let button6 = document.querySelector('#button6')

let reply1 = document.querySelector('#replies1')
let reply2 = document.querySelector('#replies2')
let reply3 = document.querySelector('#replies3')
let reply4 = document.querySelector('#replies4')
let reply5 = document.querySelector('#replies5')
let reply6 = document.querySelector('#replies6')


search.addEventListener('click', Myalert)
login.addEventListener('click', Myalert)
menu.addEventListener('click', Myalert)
more.addEventListener('click', Myalert)

function Myalert() {
    window.alert('ERROR 0x80070426\nSomething went wrong, please try again later');
    console.log('alert')
    event.stopPropagation()
}


button1.addEventListener('click', show1)
function show1(){
    reply1.style.display = 'block'
    event.stopPropagation()
}

button2.addEventListener('click', show2)
function show2(){
    reply2.style.display = 'block'
    event.stopPropagation()
}

button3.addEventListener('click', show3)
function show3(){
    reply3.style.display = 'block'
    event.stopPropagation()
}

button4.addEventListener('click', show4)
function show4(){
    reply4.style.display = 'block'
    event.stopPropagation()
}

button5.addEventListener('click', show5)
function show5(){
    reply5.style.display = 'block'
    event.stopPropagation()
}

button6.addEventListener('click', show6)
function show6(){
    reply6.style.display = 'block'
    event.stopPropagation()
}

document.addEventListener('click', hide);

function hide(e){ 
    if (![reply1, reply2, reply3, reply4, reply5, reply6].includes(e.target) &&
    ![button1, button2, button3, button4, button5, button6].includes(e.target)) {        console.log('Hide')
        reply1.style.display = 'none'
        reply2.style.display = 'none'
        reply3.style.display = 'none'
        reply4.style.display = 'none'
        reply5.style.display = 'none'
        reply6.style.display = 'none'
    }
}


document.querySelector('.remember').addEventListener('mouseover', function() {
    document.querySelector('.rmbr').style.display = 'block';
});

document.querySelector('.remember').addEventListener('mouseout', function() {
    document.querySelector('.rmbr').style.display = 'none';
})