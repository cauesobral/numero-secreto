function calcularIMC (altura, peso) {
    return altura / peso;
}

function calcularFatorial (num){
    let somaFatorial = 0;
    while (num > 0) {
        somaFatorial *= num;
        num--;
    }
    return somaFatorial;
}

function converterValor(valor) {
    return valor * 4.80;
}

function calcularAreaRetangular (altura, largura) {
    return largura * altura; 
}

function calcularAreaCircular (raio) {
    return 3.14 * (raio * raio);
}

function mostrarTabuada (num) {
    let contador = 1;
    while (contador <= 10) {
        console.log(`${contador} x ${num} = `+contador*num);
        contador++;
    }
}

