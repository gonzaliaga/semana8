function actualizarUsuario (listaUsuarios, nombreUsuario, nuevosDatos){
    if(!Array.isArray(listaUsuarios)){
        throw new Error ('La lista de usuarios no es un arreglo');
    }
    return listaUsuarios.map(usuario => {
        if(usuario.nombre === nombreUsuario){
            //devolver una nueva copia del usuario con los nuevos datos
            return {...usuario, ...nuevosDatos}
        }
        return usuario;
    })
}

//Ejemplo de uso
const usuarios = [
    { nombre: 'Juan'},
    { nombre: 'Ana' },
    { nombre: 'Luis' }
];
console.log(usuarios)
const actualizados = actualizarUsuario (usuarios, 'Ana', { edad: 35, ciudad: 'Santiago' });
const actualizados2 = actualizarUsuario (usuarios, 'Luis', { edad: 41, ciudad: 'Rancagua', pais: 'Chile' });
console.log(actualizados2);
console.log(actualizados);

