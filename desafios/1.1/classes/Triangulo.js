import {
    Vertice
} from "./Vertice.js";

export class Triangulo {

    #vertice1;
    #vertice2;
    #vertice3;

    constructor(vertice1, vertice2, vertice3) {
        this.#vertice1 = vertice1;
        this.#vertice2 = vertice2;
        this.#vertice3 = vertice3;

        if (!this.formamTriangulo()) {
            throw new Error('Os vértices inseridos não formam um triângulo válido.');
        }
    }

    static criarTriangulo() {
        let vertice1 = Vertice.criarVertice();
        let vertice2 = Vertice.criarVertice();
        let vertice3 = Vertice.criarVertice();
        console.log("Triângulo criado.")
        return new Triangulo(vertice1, vertice2, vertice3)
    }

    get vertice1() {
        return this.#vertice1;
    }

    get vertice2() {
        return this.#vertice2;
    }

    get vertice3() {
        return this.#vertice3;
    }

    formamTriangulo() {
        const distancia1 = this.#vertice1.distancia(this.#vertice2)
        const distancia2 = this.#vertice2.distancia(this.#vertice3)
        const distancia3 = this.#vertice1.distancia(this.#vertice3)

        return (
            distancia1 + distancia2 > distancia3 &&
            distancia2 + distancia3 > distancia1 &&
            distancia3 + distancia1 > distancia2
        );
    }

    equals(outroTriangulo) {
        const triangulosIguais =
            this.vertice1.equals(outroTriangulo.vertice1) &&
            this.vertice2.equals(outroTriangulo.vertice2) &&
            this.vertice3.equals(outroTriangulo.vertice3);
        if (!triangulosIguais) {
            console.log('Os triângulos não são iguais.');
            return triangulosIguais;
        }
        console.log('Os triângulos são iguais.');
        return triangulosIguais;
    }

    perimetro() {
        const distancia1 = this.vertice1.distancia(this.vertice2);
        const distancia2 = this.vertice2.distancia(this.vertice3);
        const distancia3 = this.vertice3.distancia(this.vertice1);

        const perimetro = distancia1 + distancia2 + distancia3;
        return perimetro;
    }

    tipo() {
        const lado1 = this.vertice1.distancia(this.vertice2);
        const lado2 = this.vertice2.distancia(this.vertice3);
        const lado3 = this.vertice3.distancia(this.vertice1);

        if (lado1 === lado2 && lado2 === lado3) {
            return 'Triângulo Equilátero';
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return 'Triângulo Isósceles';
        } else {
            return 'Triângulo Escaleno';
        }
    }

    clone() {
        const vertice1Clone = new Vertice(this.vertice1.x, this.vertice1.y);
        const vertice2Clone = new Vertice(this.vertice2.x, this.vertice2.y);
        const vertice3Clone = new Vertice(this.vertice3.x, this.vertice3.y);

        return new Triangulo(vertice1Clone, vertice2Clone, vertice3Clone);
    }

    area() {
        const a = this.vertice1.distancia(this.vertice2);
        const b = this.vertice2.distancia(this.vertice3);
        const c = this.vertice3.distancia(this.vertice1);
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    }

}