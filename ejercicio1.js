function calcularArea (longitud, ancho){
    //validar ambos prametros sean numeros
    if (typeof longitud !== 'number' || typeof ancho !== 'number'){
        throw new Error('Ambos parámetros deben ser números');
    }
    if (longitud < 0 || ancho < 0){
        throw new Error('Ambos parámetros deben ser mayores a 0');
    }
    //calcular el area
    const area = longitud * ancho;
    return Math.round(area *100)/100;
}

//Ejemplo de uso
console.log(calcularArea(15, 3)); 
console.log(calcularArea(2.456, 3.789));
console.log(calcularArea(2, -3));