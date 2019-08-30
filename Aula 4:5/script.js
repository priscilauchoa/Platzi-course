var canvas = document.getElementById("meu-canvas");

var papel = canvas.getContext("2d");

var x = 50;
var y = 50;

desenha("red", x, y, 200, 200);
desenha("green", x+150, y, 200, 200);


function desenha(cor, xInicial, yInicial, xFinal, yFinal){
    papel.beginPath();
    papel.strokeStyle = cor;
    papel.lineWidht = 3;
    papel.moveTo(xInicial, yInicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}







// var p = document.getElementById("paragrafo");
// p.innerHTML = "Texto qualquer";





// window.console.log("Estou no inicio");

// document.write("Está é uma linha com write");
// document.writeln("Está é uma linha com writeln");
// document.write("Está é uma linha com write");

// window.console.log("Cheguei no fim");