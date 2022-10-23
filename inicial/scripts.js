function inicializar(){
    let array=[];
    for (i=0;i<5;i++){
        let nombre=prompt("Introduce un nombre");     
                while(array.indexOf(nombre)!=-1){
                    alert("El nombre ya existe");
                nombre=prompt("Introduce un nombre");
                }
                array.push(nombre);
    }
    console.log(array.sort());
}