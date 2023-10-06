"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ponto_1 = require("./ponto");
const retangulo_1 = require("./retangulo");
const triangulo_1 = require("./triangulo");
//Autor: Leonardo Costa
// Considere que a área está definida em m2
// Exemplo de uso
try {
    const retangulo = new retangulo_1.Retangulo(new ponto_1.Ponto(0, 0), new ponto_1.Ponto(4, 0), new ponto_1.Ponto(4, 3), new ponto_1.Ponto(0, 3));
    console.log(`Área do retângulo: ${retangulo.area()} metros quadrados`);
}
catch (error) {
    console.error(error.message);
}
try {
    const triangulo = new triangulo_1.Triangulo(new ponto_1.Ponto(0, 0), new ponto_1.Ponto(5, 0), new ponto_1.Ponto(2, 4));
    console.log(`Área do triângulo: ${triangulo.area()} metros quadrados`);
}
catch (error) {
    console.error(error.message);
}
