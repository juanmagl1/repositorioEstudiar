let primero=document.querySelector('input');
let numero=document.getElementById('numero');
numero.addEventListener('change',dias);
function dias(p,valor){
    p=primero.valueAsDate;
    //El metodo value devuelve una cadena entonces le pasamos a integer y ya nos da el dia correcto
    valor=parseInt(numero.value);
    let fechaDef=p.setDate(p.getDate()+valor);
    const fecha=new Date(fechaDef)
    let pa=document.querySelector('p');
    pa.textContent=fecha;
}
