import { Vertice } from './classes/Vertice.js';
import { Triangulo } from './classes/Triangulo.js';
import { Poligono } from './classes/Poligono.js';

import PromptSync from 'prompt-sync';

console.log('Criando um polígono...');
const poligono = new Poligono();

let continuarAdicionando = true;
while (continuarAdicionando) {
  const vertice = Vertice.criarVertice;
  const adicionado = poligono.addVertice(vertice);

  if (adicionado) {
    console.log('Vértice adicionado com sucesso!');
  } else {
    console.log('O vértice já existe no polígono e não foi adicionado novamente.');
  }

  const resposta = prompt('Deseja adicionar mais um vértice? (S/N)');
  continuarAdicionando = resposta.toLowerCase() === 's';
}

console.log(`Número de vértices: ${poligono.qtdVertices()}`);
console.log(`Perímetro do polígono: ${poligono.perimetro}`);