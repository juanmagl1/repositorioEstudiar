
let cadena=document.querySelector('input');
cadena.addEventListener('change',mesNuevo);
function mesNuevo(){
    //cogemos la fecha que le hemos dado al imput
    let t=cadena.valueAsDate;
    //a esa fecha cogemos el año y el mes
    let mes=t.getMonth();
    let fecha1=t.getFullYear();
    //creamos una fecha nueva con el año nuevo el mes normal y para que no tenga un mes concreto
    let fecha=new Date(fecha1,mes+1,0).getDate();
    const array =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado"];
   for (let i=1;i<fecha;i++){
        let nuevomes=new Date(fecha1,mes,i).getDay();
        let parr=document.querySelector('p');
        parr.textContent+=i+" "+array[nuevomes] +" ";
   }

}

