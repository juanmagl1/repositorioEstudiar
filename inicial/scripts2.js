function insertar(){
    let tabla=document.getElementById("tabla");
    let nombre=prompt("Introduce un nombre");
    let empleado=prompt("Introduce un numero de empleado");
    let apellido=prompt("Introduce apellido");
    let dni=prompt("Introduce un numero de dni");
    let conjunto=document.getElementsByTagName('td');
    let i=0;
    let bandera=false;
    while (i<conjunto.length && bandera==false){
        if (conjunto[i]==dni){
            bandera=true;
        }else{
            i++;
        }
    }
    if (bandera==true){
        alert("El empleado existe");

    }else {
        let columna=document.createElement('tr');
        let fila=document.createElement('td');
        let fila2=document.createElement('td');
        let fila3=document.createElement('td');
        let fila4=document.createElement('td');
        let contenido1=document.createTextNode(empleado);
        let contenido2=document.createTextNode(apellido);
        let contenido3=document.createTextNode(nombre);
        let contenido4=document.createTextNode(dni);
        fila.appendChild(contenido1);
        fila2.appendChild(contenido4);
        fila3.appendChild(contenido3);
        fila4.appendChild(contenido2);
        columna.appendChild(fila);
        columna.appendChild(fila2);
        columna.appendChild(fila3);
        columna.appendChild(fila4);
        tabla.appendChild(columna);
    }
    let numEmp=document.getElementById("emp");
}