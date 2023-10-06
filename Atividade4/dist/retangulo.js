"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
// Vamos considerar que o retângulo está alinhado ao eixo 
class Retangulo {
    constructor(pontoA, pontoB, pontoC, pontoD) {
        this.pontoA = pontoA;
        this.pontoB = pontoB;
        this.pontoC = pontoC;
        this.pontoD = pontoD;
        // Verificações de existência e validações
        if (pontoA.x !== pontoD.x || pontoB.x !== pontoC.x || pontoA.y !== pontoB.y || pontoC.y !== pontoD.y) {
            throw new Error("Os pontos fornecidos não formam um retângulo alinhado aos eixos.");
        }
    }
    area() {
        // Lógica para calcular a área
        const largura = Math.abs(this.pontoB.x - this.pontoA.x);
        const altura = Math.abs(this.pontoA.y - this.pontoD.y);
        return largura * altura;
    }
}
exports.Retangulo = Retangulo;
