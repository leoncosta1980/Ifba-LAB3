"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
class Triangulo {
    constructor(pontoA, pontoB, pontoC) {
        this.pontoA = pontoA;
        this.pontoB = pontoB;
        this.pontoC = pontoC;
        // Verificações de existência e validações
        if ((pontoB.y - pontoA.y) * (pontoC.x - pontoA.x) === (pontoC.y - pontoA.y) * (pontoB.x - pontoA.x)) {
            throw new Error("Os pontos fornecidos são colineares e não podem formar um triângulo.");
        }
    }
    area() {
        // Lógica para calcular a área
        return Math.abs((this.pontoA.x * (this.pontoB.y - this.pontoC.y) +
            this.pontoB.x * (this.pontoC.y - this.pontoA.y) +
            this.pontoC.x * (this.pontoA.y - this.pontoB.y)) / 2);
    }
}
exports.Triangulo = Triangulo;
