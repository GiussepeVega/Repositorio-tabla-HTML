
cambiarColor()

let name = prompt("Ingresa tu nombre")

alert("Hola " + name + " bienvenido a esta pagina")


function cambiarColor(){
    

let a = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let c = Math.floor(Math.random() * 256);

document.querySelector("h1").style.color="rgb(" + a + "," + b + "," + c + ")";

setTimeout("cambiarColor()", 1000);

}

