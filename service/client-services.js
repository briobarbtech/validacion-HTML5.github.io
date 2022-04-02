function agregarPerfil (perfil) {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({name: perfil.name, email: perfil.email, password: perfil.pass, birthday: perfil.birth, phoneNumber: perfil.phoneNumber, cep: perfil.cep,city: perfil.city,state: perfil.state, id: uuid.v4()})
    }).then(respuesta => {
        console.log(respuesta)
    }).catch((error) =>{
        console.log(error)
    })
}


export const clientService = {
    agregarPerfil,

}