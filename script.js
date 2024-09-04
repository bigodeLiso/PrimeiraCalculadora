let valor = document.getElementById("conta")
let valor2 = document.getElementById("conta2")

let op = document.getElementById("oper")

let resultado = document.getElementById("resultado")

function insert(n) {

    if (valor.textContent == "") {
        valor.textContent = n;
        console.log(valor.textContent)
    } else if (valor2.textContent == "") {
        valor2.textContent = n;
    } else {
        window.alert("Foi inserido o total de números")
    }
}

function insertOper(p) {

    if (op.textContent == "") {
        op.textContent = p;
    } else {
        window.alert("Foi inserido o total de operações")
    }
}

function enter() {

    let result

    let n1 = Number(valor.textContent)
    let n2 = Number(valor2.textContent)

    switch (op.textContent) {
        case '+':
            result = n1 + n2;
            resultado.textContent = result
            break;
        case '-':
            result = n1 - n2;
            resultado.textContent = result
        default:
            window.alert("Falta informação")
            break;
    }
}

function limpar() {
    op.textContent = ""
    valor.textContent = ""
    valor2.textContent = ""
    resultado.textContent = ""
}
