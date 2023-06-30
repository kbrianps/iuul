export class Cliente {
  constructor(nome, cpf, dataNascimento, renda, estadoCivil, dependentes) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = this.converterData(dataNascimento);
    this.renda = renda;
    this.estadoCivil = estadoCivil;
    this.dependentes = dependentes;
  }

  validarNome() {
    if (typeof this.nome !== "string" || this.nome.length < 5) {
      throw new Error("O nome deve ter pelo menos 5 caracteres.");
    }
  }

  validarCPF() {
    const cpfString = this.cpf.toString();
    if (!/^\d{11}$/.test(cpfString)) {
      throw new Error("O CPF deve ter exatamente 11 dígitos.");
    }
  }

  validarDataNascimento() {
    if (!(this.dataNascimento instanceof Date)) {
      throw new Error("A data de nascimento deve ser do tipo Date.");
    }

    const hoje = new Date();
    const idadeMinima = 18;
    const dataNascimentoValida = new Date(
      this.dataNascimento.getFullYear() + idadeMinima,
      this.dataNascimento.getMonth(),
      this.dataNascimento.getDate()
    );

    if (dataNascimentoValida > hoje) {
      throw new Error("O cliente deve ter pelo menos 18 anos na data atual.");
    }
  }

  validarRenda() {
    if (typeof this.renda !== "number" || this.renda < 0) {
      throw new Error("A renda mensal deve ser um valor numérico maior ou igual a zero.");
    }
  }

  validarEstadoCivil() {
    const estadosCivisValidos = ["C", "S", "V", "D"];
    const estadoCivilValido = estadosCivisValidos.includes(this.estadoCivil.toUpperCase());

    if (!estadoCivilValido) {
      throw new Error("O estado civil deve ser C, S, V ou D (maiúsculo ou minúsculo).");
    }
  }

  validarDependentes() {
    if (typeof this.dependentes !== "number" || this.dependentes < 0 || this.dependentes > 10) {
      throw new Error("O número de dependentes deve ser um valor numérico entre 0 e 10.");
    }
  }

  converterData(dataString) {
    const [dia, mes, ano] = dataString.split("/");
    return new Date(ano, mes - 1, dia);
  }

  formatarCPF(cpf) {
    const cpfFormatado = cpf.toString().padStart(11, "0");
    return `${cpfFormatado.substr(0, 3)}.${cpfFormatado.substr(3, 3)}.${cpfFormatado.substr(6, 3)}-${cpfFormatado.substr(9, 2)}`;
  }

  formatarData(data) {
    const dia = data.getDate().toString().padStart(2, "0");
    const mes = (data.getMonth() + 1).toString().padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  imprimirDadosCliente() {
    const cpfFormatado = this.formatarCPF(this.cpf);
    const rendaFormatada = this.renda.toFixed(2);
    const dataFormatada = this.formatarData(this.dataNascimento);

    console.log("Dados do cliente:");
    console.log(`Nome: ${this.nome}`);
    console.log(`CPF: ${cpfFormatado}`);
    console.log(`Data de Nascimento: ${dataFormatada}`);
    console.log(`Renda Mensal: R$ ${rendaFormatada}`);
    console.log(`Estado Civil: ${this.estadoCivil}`);
    console.log(`Dependentes: ${this.dependentes}`);
  }
}
