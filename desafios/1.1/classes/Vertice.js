import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

export class Vertice {

    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    distancia(outroVertice) {
        return Math.sqrt(
            (outroVertice.#x - this.#x) ** 2 + 
            (outroVertice.#y - this.#y) ** 2);
    }

    move() {
        let input = prompt(`\nVocê quer alterar a posição do vértice (${this.#x},${this.#y})? [s/n] ` ).toLowerCase();
        if (input !== 's') {
            console.log('Vértice não alterado.')
            return
        }
        let x = prompt('x = ');
        let y = prompt('y = ');
        this.#x = x;
        this.#y = y;
        console.log(`Vértice alterado para (${this.#x},${this.#y}).`)
    }

    equals(outroVertice) {
        return this.#x === outroVertice.x && this.#y === outroVertice.#y;
    }

    static criarVertice() {
        console.log('Insira as coordenadas do vértice.');
        let x = prompt('x = ');
        let y = prompt('y = ');
        let vertice = new Vertice(x, y);
        console.log(`Vértice criado: (${x},${y})\n`);
        return vertice;
      }

}