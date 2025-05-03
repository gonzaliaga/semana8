function reservarAsiento(asientoDisponibles, asientoReservado){
    if(!Array.isArray(asientoDisponibles)){
        throw new Error ('La lista de asientos no es un arreglo');
    }
    if(typeof asientoReservado !== 'number'){
        throw new Error ('El asiento reservado no es un número');
    }
    //verificar si el asiento existe en la lista
    if(!asientoDisponibles.includes(asientoReservado)){
        return[...asientosDisponibles]//retornando una copia sin cambios
    }
    //retornar nueva lista sin el asiento reservado
    return asientoDisponibles.filter(asiento => asiento !== asientoReservado);
}

//Ejemplo de uso
const disponibles = [1, 2, 3, 4, 5];
const nuevaLista = reservarAsiento(disponibles,3);


console.log(disponibles);
console.log(nuevaLista);