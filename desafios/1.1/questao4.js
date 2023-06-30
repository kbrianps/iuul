import { Aluno } from './classes/Aluno.js';
import { Turma } from './classes/Turma.js';
import PromptSync from 'prompt-sync';
const prompt = PromptSync({ sigint: true });
const turma = new Turma();

console.log('=== Cadastro de Alunos ===');

while (true) {
  const matricula = prompt('Digite a matrícula do aluno (ou digite "sair" para finalizar):');
  if (matricula.toLowerCase() === 'sair') {
    break;
  }

  const nome = prompt('Digite o nome do aluno:');
  const aluno = new Aluno(matricula, nome);

  if (!turma.inserirAluno(aluno)) {
    continue;
  }

  const notaP1 = parseFloat(prompt('Digite a nota P1 do aluno (ou deixe em branco caso o aluno tenha faltado):'));
  if (!isNaN(notaP1)) {
    turma.lancarNotaP1(matricula, notaP1);
  }

  const notaP2 = parseFloat(prompt('Digite a nota P2 do aluno (ou deixe em branco caso o aluno tenha faltado):'));
  if (!isNaN(notaP2)) {
    turma.lancarNotaP2(matricula, notaP2);
  }
}


console.log('\n=== Lista de Alunos ===');
turma.imprimirTurma();