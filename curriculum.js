const send= document.getElementsByTagName("button");
console.log(send);
send[0].addEventListener("click",envia);
function envia(){
    alert("Su mensaje ha sido enviado");
};
const texto= document.getElementById("msg");
console.log(texto)
texto.addEventListener("focusin",destaca)
function destaca(){
    console.log("hecho");
    texto.style.backgroundColor= "#E0FFFF";
};
const texto2= document.getElementById("msg");
texto.addEventListener("focusout",sinColor)
function sinColor(){
    texto.style.backgroundColor= "initial";
};