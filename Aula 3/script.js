
// var massa = 56;
// var resultado =  massa * gTerra;

// document.write("peso do objeto na Terra é: " + resultado);
var gTerra = 9.8;
var gMarte = 3.7;
var gJupiter = 24.8;

var peso = prompt("Qual é o seu peso?");
var planeta = prompt("Qual Planeta deseja saber o peso(escolha entre Marte ou Jupiter)");
var pesoFinal;

if (planeta == "marte") {
    pesoFinal = (peso / gTerra) * gMarte;
    document.write("O peso em Marte é" + pesoFinal + "<br>");

} else if (planeta == "jupiter") {

    pesoFinal = (peso / gTerra) * gJupiter;
    document.write("O peso em Jupiter é" + pesoFinal);

} else {
    document.write("Planeta não válido");
}