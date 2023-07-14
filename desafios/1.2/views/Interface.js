export default class Interface {

    static print(item) {
        console.log(item);
    }

    static menu(option) {

        if(option === 'main') {
            console.clear();
            return('Menu Principal\
                    \n\n1-Cadastro de pacientes\
                    \n2-Agenda\
                    \n3-Fim\n');
        }
        if(option === 'patients') {
            console.clear();
            return('Menu do Cadastro de Pacientes\
                    \n\n1-Cadastrar novo paciente\
                    \n2-Excluir paciente\
                    \n3-Listar pacientes (ordenado por CPF)\
                    \n4-Listar pacientes (ordenado por nome)\
                    \n5-Voltar p/ menu principal\n');
        }
        if(option === 'schedule') {
            console.clear();
            return('Agenda\
                    \n\n1-Agendar consulta\
                    \n2-Cancelar agendamento\
                    \n3-Listar agenda\
                    \n4-Voltar p/ menu principal\n');
        }

    }

    static error(option) {
        if (option == 'invalidOption') {
            return('\nOpção inválida. Aperte ENTER para continuar.\n');
        }
        if (option == 'invalidCPF') {
            return('\nCPF inválido. Aperte ENTER para tentar novamente.\n');
        }
        if (option == 'invalidUsername') {
            return('\nErro: nome de usuário deve ter, pelo menos, cinco caracteres.Aperte ENTER para tentar novamente.\n');
        }
        if (option == 'invalidBirthdate') {
            return('\nErro: data de nascimento deve ser inserida no formato dd/mm/aaaa.\n');
        }
    }

    static breadcrumbs(option) {

        if (option == '1.1') {
            console.clear();
            return('Cadastro de pacientes > Cadastrar novo paciente\n');
        }
        if (option == '1.2') {
            console.clear();
            return('Cadastro de pacientes > Excluir paciente\n');
        }
        if (option == '1.3' || option == '1.4') {
            console.clear();
            return('Cadastro de pacientes > Listar pacientes\n');
        }

    }

    static items(option) {

        if (option == 'cpf') {
            return('CPF: ');
        }
        if (option == 'username') {
            return('Nome: ');
        }
        if (option == 'birthdate') {
            return('Data de nascimento: ');
        }
    }
}