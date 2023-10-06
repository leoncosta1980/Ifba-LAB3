import { Ponto } from "./ponto";
import { Retangulo } from "./retangulo";
import { Triangulo } from "./triangulo";

//Autor: Leonardo Costa
// Considere que a área está definida em m2
// Exemplo de uso
try {
    const retangulo = new Retangulo(new Ponto(0, 0), new Ponto(4, 0), new Ponto(4, 3), new Ponto(0, 3));
    console.log(`Área do retângulo: ${retangulo.area()} metros quadrados`);
} catch (error) {
    console.error((error as Error).message);

}

try {
    const triangulo = new Triangulo(new Ponto(0, 0), new Ponto(5, 0), new Ponto(2, 4));
    console.log(`Área do triângulo: ${triangulo.area()} metros quadrados`);
} catch (error) {
    console.error((error as Error).message);

}
