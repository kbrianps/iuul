import { Vertice } from './vertice.js';
import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true });

console.log('Insira as coordenadas do primeiro vértice.');
let x = parseInt(prompt('x = '));
let y = parseInt(prompt('y = '));
let vertice1 = new Vertice(x, y);
console.log(`vertice1 = (${x},${y})\n`)

console.log('Insira as coordenadas do segundo vértice.');
x = parseInt(prompt('x = '));
y = parseInt(prompt('y = '));
let vertice2 = new Vertice(x, y);
console.log(`vertice2 = (${x},${y})\n`)

console.log('Insira as coordenadas do terceiro vértice.');
x = parseInt(prompt('x = '));
y = parseInt(prompt('y = '));
let vertice3 = new Vertice(x, y);
console.log(`vertice3 = (${x},${y})\n`);

let distancia1 = vertice1.distancia(vertice2);
let distancia2 = vertice2.distancia(vertice3);
let distancia3 = vertice1.distancia(vertice3);

if (Number.isInteger(distancia1)) {
    console.log(`A distância entre vertice1 e vertice2 é ${distancia1}.`);
} else {
    console.log(`A distância entre vertice1 e vertice2 é ${distancia1} aproximadamente.`);
}

if (Number.isInteger(distancia2)) {
    console.log(`A distância entre vertice2 e vertice3 é ${distancia2}.`);
} else {
    console.log(`A distância entre vertice2 e vertice3 é ${distancia2} aproximadamente.`);
}

if (Number.isInteger(distancia3)) {
    console.log(`A distância entre vertice1 e vertice3 é ${distancia3}.\n`);
} else {
    console.log(`A distância entre vertice1 e vertice3 é ${distancia3} aproximadamente.\n`);
}

let input = prompt('Você quer mover o vertice1 para outra posição? [s/n] ')
if (input === 's') {
    console.log('Insira as coordenadas do primeiro vértice.');
    x = parseInt(prompt('x = '));
    y = parseInt(prompt('y = '));
    vertice1.move(x,y)
    console.log(`vertice1 = (${x},${y})\n`)
}

input = prompt('Você quer mover o vertice2 para outra posição? [s/n] ')
if (input === 's') {
    console.log('Insira as coordenadas do segundo vértice.');
    let x = parseInt(prompt('x = '));
    let y = parseInt(prompt('y = '));
    vertice2.move(x,y)
    console.log(`vertice2 = (${x},${y})\n`)
}

input = prompt('Você quer mover o vertice3 para outra posição? [s/n] ')
if (input === 's') {
    console.log('Insira as coordenadas do segundo vértice.');
    x = parseInt(prompt('x = '));
    y = parseInt(prompt('y = '));
    vertice3.move(x,y)
    console.log(`vertice3 = (${x},${y})`)
}

if (vertice1.equals(vertice2)) {
    console.log('\nO vertice1 é igual ao vertice2.')
} else {
    console.log('\nO vertice1 não é igual ao vertice2.')
}

if (vertice2.equals(vertice3)) {
    console.log('O vertice2 é igual ao vertice3.')
} else {
    console.log('O vertice2 não é igual ao vertice3.')
}

if (vertice1.equals(vertice3)) {
    console.log('O vertice1 é igual ao vertice3.')
} else {
    console.log('O vertice1 não é igual ao vertice3.')
}
