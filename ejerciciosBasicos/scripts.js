let caja=document.getElementById('caja');
function cambiaColor(){
    caja.style.background="green";
}
caja.addEventListener('mouseenter',cambiaColor);
function cambiaRojo(){
    caja.style.background="red";
}
caja.addEventListener('mouseleave',cambiaRojo);

function pulsa(){
    console.log('Has pulsado la caja');
}
function despulsa(){
    console.log(`Has soltado el boton dentro de la caja`);
}
caja.addEventListener('mousedown',pulsa);
caja.addEventListener('mouseup',despulsa);

//Ejercicio 2
let letra=document.querySelector('input');
function pulsaTecla(){
    console.log('Has pulsado la tecla');
}
function despulsaTecla(){
    console.log(`Has soltado la tecla`);
}
letra.addEventListener('keydown',pulsaTecla);
letra.addEventListener('keydown',despulsaTecla);

function onKeyDownHandler() {
    console.log("Has pulsado ",  String.fromCharCode(event.keyCode));
}
letra.addEventListener('keydown',onKeyDownHandler);

function info(event){
    //Con esta sentencia lo que hacemos es quitarle al boton el valor por defecto
    event.preventDefault();
    let valor=document.getElementById("introduce").value;
    console.log(valor);
}

let boton=document.querySelector('#envia');
boton.addEventListener('click',info);