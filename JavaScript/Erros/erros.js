function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');

        if(typeof num !== 'number') throw new TypeError('Num precisa ser do tipo number');

        if(arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    } 
    catch (e) {
        if(e instanceof ReferenceError) {
            console.log('Reference Error');
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log('Type Error');
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log('Range Error');
            console.log(e.message);
        } else {
            console.log('Tipo de erro inesperado: ' + e);
        }
    }
}

//console.log(validaArray());
//console.log(validaArray(5, 5));
//console.log(validaArray([], 'a'));
console.log(validaArray([], 5));