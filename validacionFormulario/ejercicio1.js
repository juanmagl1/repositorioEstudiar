let nombre=document.querySelector('#nom');
let email=document.querySelector('#email');
let cont=document.querySelector('#pass');
let form =document.querySelector('#form');

// const checkNombre=()=>{
//     let valid=false;
//     const min=2,max=25;
//     let nom=nombre.value.trim();
//     if (!isRequired(nom)){
//         showError(nombre,'El campo no puede estar en blanco');
//     }else if (!isBetween(nom.length)){
//         showError(nombre,'La contraseña no puede tener menos de 3 caracteres')
//     }else {
//         showSucess(nombre);
//         valid=true;
//     }
//     return valid;
// }
// function isBetween (length,min,max){
//     let valid=false;
//     if (length<min || length>max){
//         valid=true;
//     }
//     return valid;
// } 
// const isRequired=value=>value===''?false:true;
// const showError=(input,message)=>{
//     const formField=input.parentElement;
//     const error=formField.querySelector('small');
//     error.textContent=message;
// }

// const showSucess=(input)=>{
//     const formField=input.parentElement;
//     const error=formField.querySelector('small');
//     error.textContent="";
// }
// form.addEventListener('submit' , function(e){
//     e.preventDefault();
//     let formCorrect=checkNombre();

//     let formularioValido=formCorrect;
//     if (formularioValido){
//         e.target.submit();
//     }
// });


nombre.addEventListener('input',function(e){
    if (nombre.validity.tooShort){
    nombre.setCustomValidity("Error");
    }else {
        nombre.setCustomValidity("");
   }
});

