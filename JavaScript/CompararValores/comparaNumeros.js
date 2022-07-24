function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina novos valores!';

    const PRIMEIRAFRASE = criaPrimeiraFrase(num1, num2);
    const SEGUNDAFRASE = criaSegundaFrase(num1, num2);

    return `${PRIMEIRAFRASE} ${SEGUNDAFRASE}`;
}

function criaPrimeiraFrase(num1, num2) {
    let areEquals = '';

    if (num1 !== num2) {
        areEquals = 'não ';
    }

    return `Os números ${num1} e ${num2} ${areEquals}são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const SOMA = num1 + num2, 
        COMPARA_TEN = SOMA >= 10,
        COMPARA_TWENTY = SOMA >= 20,
        TEN = 'que 10 ',
        TWENTY = 'que 20'
        ;
    
    let resultado10 = 'menor/igual',
        resultado20 = 'menor/igual';

    if(COMPARA_TEN && !COMPARA_TWENTY) {
        resultado10 = `maior/igual ${TEN}e `;
        resultado20 += ` ${TWENTY}`;
    } else if (!COMPARA_TEN) {
        resultado10 +=  ` ${TEN}`;
        resultado20 = '';
    }

    if (COMPARA_TWENTY) {
        resultado20 = `maior/igual ${TWENTY}`;
        resultado10 = '';
    }

    return `Sua soma é ${SOMA}, que é ${resultado10}${resultado20}`;
}

console.log(comparaNumeros(3,3));