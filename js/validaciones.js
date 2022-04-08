export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ``
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}

const tiposDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío",
    },
    email: {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido",

    },
    password: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres y máximo 12, debe contener al menos una letra mayúscula y una minuscula, un número, y no puede contener caracteres especiales"
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener al menos 18 años"
    },
    numero: {
        valueMissing: "El número de teléfono no puede estar vacío",
        patternMismatch: "El formato requerido es (xxx)-xxxxxxx"
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input),
}

function mostrarMensajeError(tipoDeInput, input) {
    let mensaje = ""
    tiposDeErrores.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajesError[tipoDeInput][error]
        }
    });
    return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ''
    if(mayorDeEdad(fechaCliente)){
        mensaje = 'Debes tener al menos 18 años'
    }
    input.setCustomValidity(mensaje)
}

function mayorDeEdad (fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate())
    return diferenciaFechas <= fechaActual;
}
