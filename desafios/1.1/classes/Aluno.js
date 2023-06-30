export class Aluno {
    constructor(matricula, nome) {
      this.matricula = matricula;
      this.nome = nome;
      this.notaP1 = undefined;
      this.notaP2 = undefined;
    }
  
    lancarNotaP1(nota) {
      this.notaP1 = nota;
    }
  
    lancarNotaP2(nota) {
      this.notaP2 = nota;
    }
  
    calcularNotaFinal() {
      if (this.notaP1 !== undefined && this.notaP2 !== undefined) {
        return ((this.notaP1 + this.notaP2) / 2).toFixed(1);
      } else if (this.notaP1 !== undefined) {
        return (this.notaP1 / 2).toFixed(1);
      } else if (this.notaP2 !== undefined) {
        return (this.notaP2 / 2).toFixed(1);
      } else {
        return '0.0';
      }
    }
  }
  