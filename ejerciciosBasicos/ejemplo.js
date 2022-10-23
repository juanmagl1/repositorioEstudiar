let boton=document.getElementById('gallery');
function color(event){
    event.target.setAttribute("style","Background-color:red");
}
function pasar(event){
    if(event.target.className!='gallery'){
        event.target.setAttribute("style","Background-color:green");
    }
    
}
function despasar(event){
    if(event.target.className!='gallery'){
        event.target.removeAttribute("style");
    }
}
boton.addEventListener('click',color);
boton.addEventListener('mouseenter',pasar,true);
boton.addEventListener('mouseleave',despasar,true);