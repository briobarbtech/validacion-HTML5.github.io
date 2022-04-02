import {clientService} from "../service/client-services.js"



clientService.listarPerfiles();


const form = document.querySelectorAll('#formulario')
const botonCargar = document.querySelector('#submit');
botonCargar.addEventListener('click', (event)=>{
    event.preventDefault();
    let perfil;
    form.forEach(entrada => {
        perfil = {
            name: entrada.querySelector('#name').value,
            email: entrada.querySelector('#email').value,
            pass: entrada.querySelector('#password').value,
            birth: entrada.querySelector('#birth').value,
            phoneNumber: entrada.querySelector('#phoneNumber').value,
            cep: entrada.querySelector('#cep').value,
            city: entrada.querySelector('#city').value,
            state: entrada.querySelector('#state').value,
        }
   });
   clientService.agregarPerfil(perfil)
})

