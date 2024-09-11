function mostrarTexto(){
    refMyText.innerHTML = "texto que irá dentro del div obtenido"
}

const inputName = document.querySelector("#inp-nombre");
const outputText = document.querySelector("#salida-saludo");
function saludar(){
    if (inputName.value != ""){
        const saludoCompleto = "agradecemos mucho tu sinceridad y apoyo";
        outputText.innerHTML = saludoCompleto;
    } else {
        outputText.innerHTML = "Por favor ayudanos a ser mejor,gracias"
    }
}
