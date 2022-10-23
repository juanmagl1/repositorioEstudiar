const queryString=window.location.search
console.log(queryString);
const params= new URLSearchParams(queryString);
let id=params.get('id');

//Creamos una petición nueva

let peticion=new XMLHttpRequest();
peticion.open('GET',` http://localhost:3000/posts/${id}`);
peticion.send();
peticion.addEventListener('readystatechange',function(){
    if (peticion.readyState===4){
        if (peticion.status===200){
            let comentarios=JSON.parse(peticion.responseText);
            for(let i=0;i<comentarios.length;i++){
                let bd=document.querySelector('body');
                let list=document.createElement('ul');
                let elem=document.createElement('li');
                let cont=document.createTextNode(comentarios[i].content);
                elem.appendChild(cont);
                list.appendChild(elem);
                bd.appendChild(list);
            }
        }else {
            console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");

        }
    }
})