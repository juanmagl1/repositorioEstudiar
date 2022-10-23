let usernameEl=document.querySelector('#username');
let emailEl=document.querySelector('#email');
let ageEl=document.querySelector('#age');
let passEl=document.querySelector('#password');
let form=document.querySelector('form');
let sexEl=document.querySelectorAll('#sex');
let ch=document.querySelector('#conditions');
let confirmPasswordEl=document.querySelector('#confirm-password');

const checkUsername=()=>{
    let valid=false;
    const min=2,max=25;
    let nom=usernameEl.value.trim();
    if (!isRequired(nom)){
        showError(usernameEl,'El campo username no puede estar en blanco');
    }else if (!isBetween(nom.length,min,max)){
        showError(usernameEl,`El campo debe de estar entre ${min} y ${max}`);
    }else {
        showSuccess(usernameEl);
        valid=true;
    }
    return valid;
}
const checkEmail=()=>{
    let valid=false;
    let em=emailEl.value.trim();
    if (!isRequired(em)){
        showError(emailEl,'El campo email no debe de estar vacío');
    }else if (!emailValid(em)){
        showError(emailEl,'El email no es válido');
    }else {
        showSuccess(emailEl);
        valid=true;
    }
    return valid;
}
const checkRadio=()=>{
    let chk=radioValid(sexEl);
    if (!chk){
        showError(sexEl[0],'Marca un campo obligatoriamente');
    }else {
        showSuccess(sexEl[0]);
    }
    return chk;
}
const radioValid=(radios)=>{
    let valid=false;
    for(let i=0;i<radios.length;i++){
        if (radios[i].checked){
            valid=true;
        }
    }
    return valid;
}
const checkAge=()=>{
    let valid=false;
    let ag=(ageEl.value.trim());
    const min=18,max=104;
    if (!isRequired(ag)){
        showError(ageEl,'El campo no debe de estar vacio');
    }else if (!validaAge(ag,min,max)){
        showError(ageEl,'Introduce una edad correcta');
    }else {
        showSuccess(ageEl);
        valid=true;
    }
    return valid;
}
const checkPassword=()=>{
    let valid=false;
    let pass=passEl.value.trim();
    if (!isRequired(pass)){
        showError(passEl,'La contraseña no debe de estar vacia');
    }else if (!isPasswordSecure(pass)){
        showError(passEl,'La contraseña no es correcta');
    }else {
        showSuccess(passEl);
        valid=true;
    }
    return valid;
}
const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passEl.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordEl, 'Introduce la contraseña');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordEl, 'Las contraseñas no coinciden');
    } else {
        showSuccess(confirmPasswordEl);
        valid = true;
    }

    return valid;
};
const checkConditions=()=>{
    //Nos traemos la respuesta del metodo isCheckedcheckbox
    let valid=isCheckedCheckbox(ch);
    if (!valid){
        showError(ch,'Acepta las condiciones por favor');
    }else {
        showSuccess(ch);
    }
    return valid;
}
//Para aceptar las condiciones devuelve un boolean
const isCheckedCheckbox = checkbox => checkbox.checked;

const validaAge=(value,min,max)=> value < min|| value > max ? false:true;
const emailValid=(email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
    const formField = input.parentElement;
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    const error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit',function(e){
    e.preventDefault();

    let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword(),
    isSexChecked = checkRadio(),
    isConditionsChecked = checkConditions();

let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid &&
    isSexChecked &&
    isConditionsChecked;

    if (isFormValid){
        e.target.submit();
    }
});

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'sex':
            checkRadio();
            break;
        case 'conditions':
            checkConditions();
            break;
    }
});