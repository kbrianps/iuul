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

    distancia(b) {
        let distancia = Math.sqrt((b.#x - this.#x) ** 2 + (b.#y - this.#y) ** 2);
        if (Number.isInteger(distancia)){
            return distancia;
        } else {
            return distancia.toFixed(2);
        }
    }

    move(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(outroVertice) {
        return this.#x === outroVertice.x && this.#y === outroVertice.#y;
    }

}