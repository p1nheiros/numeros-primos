function executarOperacao() {
    var operacao = document.getElementById("operacao").value;
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    if (!numero) {
        alert("Por favor, digite um número.");
        return;
    }

    if (numero === "0") {
        alert("O número 0 não é um número primo e não pode ser usado para gerar uma lista.");
        return;
    }

    if (numero < 0) {
        alert("Por favor, digite um número positivo para realizar esta operação.");
        return;
    }

    numero = parseInt(numero);

    if (operacao === "verificar") {
        if (isPrimo(numero)) {
            resultado.innerHTML = numero + " é um número primo.";
        } else {
            resultado.innerHTML = numero + " não é um número primo.";
        }
    } else if (operacao === "gerar") {
        var primos = [];
        for (var i = 2; i <= numero; i++) {
            if (isPrimo(i)) {
                primos.push(i);
            }
        }
        resultado.innerHTML = "Números primos até " + numero + ": " + primos.join(', ');
    }
}

function isPrimo(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function limpar() {
    document.getElementById("operacao").value = "verificar";
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}