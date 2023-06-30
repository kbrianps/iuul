import { Vertice } from './classes/Vertice.js';
import { Triangulo } from './classes/Triangulo.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });

let triangulo1 = Triangulo.criarTriangulo()
let triangulo2 = Triangulo.criarTriangulo()
let triangulo3 = Triangulo.criarTriangulo()

console.log(triangulo1.equals(triangulo2))

console.log(triangulo1.perimetro())

console.log(triangulo1.tipo())

let triangulo4 = triangulo1.clone()

console.log(triangulo4.area())