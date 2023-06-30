export class Turma {
  constructor() {
    this.alunos = [];
  }

  inserirAluno(aluno) {
    if (this.alunoExistente(aluno.matricula)) {
      console.log('Já existe um aluno com essa matrícula.');
      return false;
    }

    this.alunos.push(aluno);
    return true;
  }

  removerAluno(matricula) {
    const index = this.alunos.findIndex(aluno => aluno.matricula === matricula);
    if (index !== -1) {
      this.alunos.splice(index, 1);
      console.log('Aluno removido com sucesso.');
    } else {
      console.log('Aluno não encontrado.');
    }
  }

  lancarNotaP1(matricula, nota) {
    const aluno = this.buscarAluno(matricula);
    if (aluno) {
      aluno.lancarNotaP1(nota);
      console.log('Nota P1 lançada com sucesso.');
    } else {
      console.log('Aluno não encontrado.');
    }
  }

  lancarNotaP2(matricula, nota) {
    const aluno = this.buscarAluno(matricula);
    if (aluno) {
      aluno.lancarNotaP2(nota);
      console.log('Nota P2 lançada com sucesso.');
    } else {
      console.log('Aluno não encontrado.');
    }
  }

  alunoExistente(matricula) {
    return this.alunos.some(aluno => aluno.matricula === matricula);
  }

  buscarAluno(matricula) {
    return this.alunos.find(aluno => aluno.matricula === matricula);
  }

  imprimirTurma() {
    console.log('-------------------------------------------------------');
    console.log('Matricula  Nome             P1   P2   NF');
    console.log('-------------------------------------------------------');

    this.alunos.forEach(aluno => {
      const notaFinal = aluno.calcularNotaFinal();
      console.log(`${aluno.matricula}  ${aluno.nome.padEnd(16)} ${aluno.notaP1 ? aluno.notaP1.toString().padStart(3) : '-'}   ${aluno.notaP2 ? aluno.notaP2.toString().padStart(3) : '-'}   ${notaFinal}`);
    });

    console.log('-------------------------------------------------------');
  }
}