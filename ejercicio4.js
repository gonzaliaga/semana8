function agregarPaciente(listaPacientes, nuevoPaciente){
    if(!Array.isArray(listaPacientes)){
        throw new Error ('La lista de pacientes no es un arreglo');
    }
    if (typeof nuevoPaciente !== 'object' || !nuevoPaciente.nombre){
        throw new Error ('El nuevo paciente no es un objeto válido o le falta el nombre');
    }
    const existe = listaPacientes.some(paciente => paciente.nombre === nuevoPaciente.nombre);
    if(existe){
        throw new Error ('El paciente ya existe en la lista');
    }
    //retornar una nueva lista con el nuevo paciente agregado
    return [...listaPacientes, nuevoPaciente];
}

function buscarPaciente(listaPacientes, nombreBuscado){
    if(!Array.isArray(listaPacientes)){
        throw new Error ('La lista de pacientes no es un arreglo');
    }

    if(typeof nombreBuscado !== 'string'){
        throw new Error ('El nombre buscado no es una cadena de texto');
    }
    //buscar el paciente en la lista
    if (listaPacientes.length === 0){
        return 'No hay pacientes en la lista';
    }

    const encontrado = listaPacientes.find(paciente => paciente.nombre === nombreBuscado);
// || or / o 
    return encontrado || 'Paciente no encontrado';
}

//Ejemplo de uso
const pacientes = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 40 }
];
console.log(pacientes);
const nuevaLista = agregarPaciente(pacientes, { nombre: 'Laura', edad: 28 });
console.log(nuevaLista);


//buscar paciente
const resultado = buscarPaciente(nuevaLista, 'Juan');
console.log(resultado);