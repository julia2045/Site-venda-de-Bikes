//menu ativo
const links = document.querySelectorAll('.header-menu a');

function activatelinks(links){
const url = location.href;
const href = links.href;
if (url.includes(href)){
    links.classList.add("ativo");
}
  
}


links.forEach(activatelinks);

console.log(links);


//parametros url

const parameters = new URLSearchParams(location.search);

function activateproducts(parameter){
    const element = document.getElementById(parameter);
    element.checked = true;
    console.log(parameter)

}

parameters.forEach(activateproducts);


// perguntas safe

const questions = document.querySelectorAll(".questions button");

function activequestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const response = document.getElementById(controls);

    response.classList.toggle('active');
    question.setAttribute("aria-expanded", active);
}


function eventsquestions(question){
    question.addEventListener( "click", activequestion);
}
questions.forEach(eventsquestions);

//galeria de bike

const galery = document.querySelectorAll(".nmn-image img");
const galeryContent = document.querySelector(".nmn-image");

function replaceImage(event){
    const img =event.currentTarget;
    galeryContent.prepend(img);
    
}
function eventGalery(img){
    img.addEventListener("click", replaceImage);
}
galery.forEach(eventGalery);


//animation
if(window.SimpleAnime){
    new SimpleAnime();
}
