import { Vertice } from './Vertice.js';

export class Poligono {

    #vertices;

    constructor(...vertices) {
      if (vertices.length < 3) {
        throw new Error("O polígono deve ter pelo menos 3 vértices.");
      }
      this.#vertices = vertices;
    }

    addVertice(v) {
        if (this.#vertices.includes(v)) {
            return false;
        }

        this.#vertices.push(v);
        return true;
    }

    qtdVertices() {
        return this.#vertices.length
    }

    get perimetro() {
      let perimetro = 0;
      const numVertices = qtdVertices();
  
      for (let i = 0; i < numVertices; i++) {
        const verticeAtual = this.#vertices[i];
        const proximoVertice = this.#vertices[(i + 1) % numVertices]; // Próximo vértice (o último se i for o último)
  
        perimetro += verticeAtual.distancia(proximoVertice);
      }
      return perimetro;
    }
}