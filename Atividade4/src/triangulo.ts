import { Ponto } from "./ponto";
import { Figura2D } from "./figura2D";

export class Triangulo implements Figura2D {
    constructor(private pontoA: Ponto, private pontoB: Ponto, private pontoC: Ponto) {
        // Verificações de existência e validações
        if ((pontoB.y - pontoA.y) * (pontoC.x - pontoA.x) === (pontoC.y - pontoA.y) * (pontoB.x - pontoA.x)) {
            throw new Error("Os pontos fornecidos são colineares e não podem formar um triângulo.");
        }
    }

    area(): number {
        // Lógica para calcular a área
        return Math.abs((this.pontoA.x * (this.pontoB.y - this.pontoC.y) + 
                         this.pontoB.x * (this.pontoC.y - this.pontoA.y) + 
                         this.pontoC.x * (this.pontoA.y - this.pontoB.y)) / 2);
    }
}
