function calculadora(operador, valor1, valor2) {
    let resultado;
    switch (operador) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
    }
    return resultado;
}


function getResult() {
    let operator = document.getElementById("operador").value;
    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);
    document.getElementById("resultado").innerHTML = `El resultado es ${calculadora(operator, num1, num2)}.`;
}