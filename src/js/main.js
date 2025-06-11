
//Funcion toggle para el sidebar
let btnSidebar = document.getElementById("btnSidebar");
let navbarDefault = document.getElementById("navbar-default");
btnSidebar.addEventListener("click", function(){
   navbarDefault.classList.toggle("hidden");
})


//funcion writer para la descripcion
let frases = [
    "Desarrollador de software",
    "Desarrollador backend",
    "Entusiasta del codigo"
]
let pDescription = document.getElementById("pDescription");

let fraseIndex= 0;
let charIndex = 0;
let eraser = false;

function loopType(){
    let fraseActual = frases[fraseIndex];
    if(!eraser && charIndex <= fraseActual.length){
        pDescription.textContent = fraseActual.substring(0, charIndex);
        charIndex++;
        setTimeout(loopType, 100);
    }else if(eraser && charIndex >= 0){
        pDescription.textContent = fraseActual.substring(0, charIndex);
        charIndex--;
        setTimeout(loopType, 100);
    }else{
        eraser = !eraser;
        if(!eraser){
            fraseIndex = (fraseIndex + 1)% frases.length;
        }
        setTimeout(loopType, 100)
    }
}

loopType()