
// var massa = 56;
// var resultado =  massa * gTerra;

// document.write("peso do objeto na Terra é: " + resultado);
var gTerra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;

var peso = prompt("Qual é o seu peso?");

var pesoFinal = (peso / gTerra) * gMarte;

document.write("O peso em Marte é" + pesoFinal +"<br>");


pesoFinal = (peso / gTerra) * gJupiter;

document.write("O peso em Jupiter é" + pesoFinal);