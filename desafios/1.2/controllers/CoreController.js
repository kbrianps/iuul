import Keyboard from "../models/Keyboard.js";
import Patients from "../models/Patients.js";
import Interface from "../views/Interface.js";
import PatientController from "./PatientController.js";

export default class CoreController {
    runApplication() {
        while(true) {
            this.applicationFlow();
        }
    }

    applicationFlow(input='0') {
        let patientsList = new Patients();
        if (input == '0') {
            Interface.print(Interface.menu('main'));
            let input = Keyboard.input().toString();
            if (input == '1') {
                while(true) {
                    Interface.print(Interface.menu('patients'));
                    input = Keyboard.input().toString();
                    if (input == '1') {
                        let cpf = null;
                        let username = null;
                        let birthdate = null;
                        while (true) {

                            Interface.print(Interface.breadcrumbs('1.1'));

                            if (cpf != null && !PatientController.isCPFValid(cpf)) { 
                                Interface.print(cpf);
                                Interface.print(Interface.error('invalidCPF'));
                            }
                            cpf = Keyboard.input(Interface.items('cpf')).toString();

                            if (PatientController.isCPFValid(cpf)) {

                                if (username != null) {
                                    Interface.print(username);
                                    Interface.print(Interface.error('invalidUsername'));
                                }

                                username = Keyboard.input(Interface.items('username')).toString();

                                if (PatientController.isUsernameValid(username)) {

                                    if (birthdate != null) {
                                        Interface.print(birthdate);
                                        Interface.print(Interface.error('invalidBirthdate'));
                                    }
                                    birthdate = Keyboard.input(Interface.items('birthdate')).toString();

                                    if (PatientController.isBirthdateValid(birthdate)) {
                                        break;
                                    }
                                }

                            }
                        }
                        patientsList.addNewPatient(PatientController.newPatient(cpf, username, birthdate));
                        console.log(patientsList);
                    } else if (input == '2') {

                    } else if (input == '3') {

                    } else if (input == '4') {

                    } else if (input == '5') {
                        break;
                    } else {
                        Interface.print(Interface.error('invalidOption'));
                        Keyboard.input();
                    }
                }
            } else if (input == '2') {
                while(true) {
                    Interface.print(Interface.menu('schedule'));
                    input = Keyboard.input().toString();
                    if (input == '1') {

                    } else if (input == '2') {

                    } else if (input == '3') {

                    } else if (input == '4') {
                        break;
                    } else {
                        Interface.print(Interface.error('invalidOption'));
                        Keyboard.input();
                    }
                }

            } else if (input == '3') {
                process.exit(0);
            } else {
                Interface.print(Interface.error('invalidOption'));
                Keyboard.input();
            }
        }
    }
}