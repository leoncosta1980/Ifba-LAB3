import { Ponto } from "./ponto";
import { Figura2D } from "./figura2D";

// Vamos considerar que o retângulo está alinhado ao eixo 
export class Retangulo implements Figura2D {
    constructor(private pontoA: Ponto, private pontoB: Ponto, private pontoC: Ponto, private pontoD: Ponto) {
        // Verificações de existência e validações
        if (pontoA.x !== pontoD.x || pontoB.x !== pontoC.x || pontoA.y !== pontoB.y || pontoC.y !== pontoD.y) {
            throw new Error("Os pontos fornecidos não formam um retângulo alinhado aos eixos.");
        }
    }

    area(): number {
        // Lógica para calcular a área
        const largura = Math.abs(this.pontoB.x - this.pontoA.x);
        const altura = Math.abs(this.pontoA.y - this.pontoD.y);
        return largura * altura;
    }
}
