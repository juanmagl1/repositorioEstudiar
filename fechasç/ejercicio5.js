function apagar(){
    //Me creo una p
    let p=document.querySelector('p');
    //Le pongo el titulo 
    p.innerHTML+="Despiertate ya que es temprano";
    //Me creo los botones de apagar y pos poner el de apagar limpia el timeout y el de posponer salta a la otra funcion
    let boton=document.createElement('button');
    boton.setAttribute("type","submit");
    boton.setAttribute("value","apagar");
    boton.textContent="Apagar";
    document.body.insertBefore(boton,p);
    boton.addEventListener('click',clearTimeout(time));

    let boton1=document.createElement('button');
    boton1.setAttribute("type","submit");
    boton1.setAttribute("value","apagar");
    boton1.textContent="Posponer";
    document.body.insertBefore(boton1,p);
    boton1.addEventListener('click',bot);
}
function bot(){
    let bb=setTimeout(posponer,30000);
}

let time=setTimeout(apagar,30000);
function posponer(){
    let p=document.querySelector('p');
    let salto=document.createElement('br');
    document.body.appendChild(salto);
    p.innerHTML+="Vamos a hacer JavaScript";
    let boton=document.createElement('button');
    boton.setAttribute("type","submit");
    boton.setAttribute("value","posponer");
    boton.textContent="Posponer";
    document.body.insertBefore(boton,p);
    boton.addEventListener('click',bot);

    let boton1=document.createElement('button');
    boton1.setAttribute("type","submit");
    boton1.setAttribute("value","apagar");
    boton1.textContent="Apagar";
    document.body.insertBefore(boton1,p);
    boton1.addEventListener('click',clearTimeout(time));
}