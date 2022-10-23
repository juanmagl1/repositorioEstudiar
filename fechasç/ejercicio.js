const date=new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
document.querySelector('p').innerHTML="Hola hoy es "+date;