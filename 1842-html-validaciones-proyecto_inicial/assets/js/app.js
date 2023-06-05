import { valida } from "./validaciones.js";

//Listenes cada vez que el usiario salga de es einput 
//selñecciona todas las etiquetas input que hay en el HTML
const inputs = document.querySelectorAll("input");
//a cada uno de esos inputs la va a llamar la fución validar cuando salga del foco (blur)
inputs.forEach( (input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});