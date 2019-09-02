var botao = document.getElementById("botao");
botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz() {
    var numIteracoes = document.getElementById("numIteracoes").value;
    var resultado = document.getElementById("resultado");

    var numero = 1;
    while (numero <= numIteracoes) {
        if (((numero % 5) == 0) && (numero % 3) == 0) {
            document.getElementById("resultado").innerHTML = "Fizz";
        }
        else if ((numero % 3) == 0) {
            document.getElementById("resultado").innerHTML = "Buzz";
        }
        else if ((numero % 5) == 0) {
            document.getElementById("resultado").innerHTML = "FizzBuzz";
        }
        else {
            document.getElementById("resultado").innerHTML = numero;
        }
        numero++;
    }
}
