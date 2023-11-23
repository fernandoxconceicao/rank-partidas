derrotasComVitorias();

function derrotasComVitorias() {
    let saldoVitorias = 100;
    let saldoDerrotas = 50;
    let saldoTotal = saldoVitorias - saldoDerrotas;

    if (saldoTotal <= 10) {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Ferro");
    } else if (saldoTotal <= 20) {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Bronze");
    } else if (saldoTotal <= 50) {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Prata");
    } else if (saldoTotal <= 80) {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Ouro");
    } else if (saldoTotal <= 90) {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Diamante");
    } else if (saldoTotal <= 100) {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Lendário");
    } else {
        console.log("O Herói tem saldo de " + saldoTotal + " e está no nível de Imortal");
    }

    return saldoTotal;
}
