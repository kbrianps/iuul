import { Vertice } from './classes/Vertice.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let vertice1 = Vertice.criarVertice();
let vertice2 = Vertice.criarVertice();
let vertice3 = Vertice.criarVertice();

let distancia1 = vertice1.distancia(vertice2);
let distancia2 = vertice2.distancia(vertice3);
let distancia3 = vertice1.distancia(vertice3);

console.log(`A distância entre o vértice 1 e 3 é de ${distancia1.toFixed(2)}`);
console.log(`A distância entre o vértice 1 e 3 é de ${distancia2.toFixed(2)}`);
console.log(`A distância entre o vértice 1 e 3 é de ${distancia3.toFixed(2)}`);

vertice1.move();
vertice2.move();

console.log(`Vértices 1 e 3 são iguais? ${vertice1.equals(vertice3)}`);