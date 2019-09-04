// cria variavel para importar biblioteca express
var expressJs = require("express");

var aplicacao = expressJs();

aplicacao.get("/", hello);
aplicacao.get("/cursos", cursos);
aplicacao.get("/hora", hora);


function hello(req, res){
    res.send("<h1>Olá, tudo bem?</h1>");
}
function cursos(req, res){
    res.send("<ul><li>Programação básica</li><li>Programação Avançada</li></ul>")
}
function hora(req, res){
    res.send("a hora atual é: " + new Date().getHours());
}

aplicacao.listen(8989);
console.log("App em execução");
