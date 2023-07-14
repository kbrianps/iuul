export default class Interface {
    static print(opt){
        if(opt === 'main') {
            console.clear();
            console.log('Menu Principal');
            console.log('\n1-Cadastro de pacientes');
            console.log('2-Agenda');
            console.log('3-Fim\n');
        }
        if (opt === 'patients') {
            console.clear();
            console.log('Menu do Cadastro de Pacientes');
            console.log('\n1-Cadastrar novo paciente');
            console.log('2-Excluir paciente');
            console.log('3-Listar pacientes (ordenado por CPF)');   
            console.log('4-Listar pacientes (ordenado por nome)');
            console.log('5-Voltar p/ menu principal\n');
        }
        if (opt === 'schedule') {
            console.clear();
            console.log('Agenda');
            console.log('\n1-Agendar consulta');
            console.log('2-Cancelar agendamento');
            console.log('3-Listar agenda');   
            console.log('4-Voltar p/ menu principal\n');
        }
        if (opt === 'cpfNotValid') {
            console.log('Erro: CPF inválido.');
        }
        if (opt === 'usernameNotValid') {
            console.log('Erro: Nome de usuário deve ter pelo menos cinco caracteres.');
        }
        if (opt === 'birthdateNotFormatted') {
            console.log('Erro: O formato da data de nascimento inválido.')
        }
        if (opt === 'birthdateNotValid') {
            console.log('Erro: Data de nascimento inválida.')
        }
        if (opt === 'birthdateNotValidYearsOld') {
            console.log('Erro: paciente deve ter pelo menos 13 anos.')
        }
        if (opt === 'patientAlreadyExists') {
            console.log('Erro: CPF já cadastrado.')
        }
        if (opt === 'cpf') {
            return('CPF: ');
        }
        if (opt === 'username') {
            return('Nome: ');
        }
        if (opt === 'birthdate') {
            return('Data de nascimento: ');
        }
        if (opt === 'newPatient') {
            return('Paciente cadastrado com sucesso!');
        }
    }
}