export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input.message-error").innerHTML = ""
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input.message-error").innerHTML = 
        mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
   "typeMismatch",
   "valueMissing",
   "patterMismatch",
   "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
     email: {
            valueMissing:  "Este campo no puede estar vacio",
            typeMismatch:  "El correo no es valido"
        },
    password: {
        valueMissing:  "Este campo no puede estar vacio",
        patterMismatch:  "debe contener al menos 8 caracteres, maximo 15, una letra mayuscula, una minuscila, un dígito, no espacios en blanco, 1 caracter epecial"

    },
    nacimiento: {
        valueMissing:  "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 años de edad",

    },
   
}
const validadores = {
    nacimiento: (input) => ValidarNacimiento(input),
};

//BIrth es el id del input de html que quiero seleccionar
// const inputNacimiento = document.querySelector("#birth");

// el tipo de evento que qiuiero escuchar es cuando salga, entonces va a ser “blur” o cuando quite el input o el foco de ese espacio o de ese input.
//luego hay una función aónima que recibe el evento
// inputNacimiento.addEventListener("blur", (evento) => {
//     console.log(evento.target)
// });

function  mostrarMensajeDeError(tipoDeInput, input){
let mensaje = "" ; 
tipoDeErrores.forEach(error => {
    if (input.validity[error]){
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje =mensajesDeError[tipoDeInput][error];
    }
});
return mensaje; 
}
//Creo una función que reciba el input 
//Me interesa acceder al valor del input 
function ValidarNacimiento(input){
const fechaCliente = new Date(input.value);
let mensaje = " "; 
if (mayorDeEdad(fechaCliente)){
    mensaje = "Debes tenr al menos 18 años de edad "
}
;
}
//Verificar que la fecha de nacimiento ingresa correspond acon un mayor de edad 

function mayorDeEdad (fecha) {
    const fechaActual = new Date(); 
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(),fecha.getUTCDate( ))
    return diferenciaFechas <= fechaActual;

}