import Patient from './Patient.js';
import Interface from './Interface.js';
import { DateTime, Duration } from "luxon";
import Keyboard from './Keyboard.js';



export default class PatientController {

    #patients;

    constructor() {
        this.#patients = [];
    }

    isCPFValid(cpf) {

        let j = 0;
        let k = 0;
        let sum = 0;

        cpf = cpf.toString().replace(/[^\d]+/g, '').split('').map(numStr => parseInt(numStr));
        if (cpf.length != 11 || new Set(cpf).size == 1) {
            Interface.print('cpfNotValid');
            Keyboard.input();
            return false;
        }

        for (let i = 0; i < 9; i++) {
            sum += cpf[i] * (10 - i);
        }

        if (sum % 11 == 0 || sum % 11 == 1) {
            j = 0;
        } else if (sum % 11 >= 2 && sum % 11 <= 10) {
            j = 11 - (sum % 11);
        }

        sum = 0;

        for (let i = 0; i < 10; i++) {
            sum += cpf[i] * (11 - i);
        }

        if (sum % 11 == 0 || sum % 11 == 1) {
            k = 0;
        } else if (sum % 11 >= 2 && sum % 11 <= 10) {
            k = 11 - (sum % 11);
        }

        if (j == cpf[9] && k == cpf[10]) {
            return true;
        } else {
            Interface.print('cpfNotValid');
            Keyboard.input();
            return false;
        }

    }

    isUsernameValid(username) {
        if (username.length >= 5) {
            return true;
        } else {
            Interface.print('usernameNotValid');
            Keyboard.input();
            return false;
        }
    }

    isBirthdateValid(birthdate) {

        const regexp = new RegExp('\\d{2}/\\d{2}/\\d{4}', 'g')
        if (!regexp.test(birthdate)) {
            Interface.print('birthdateNotFormatted');
            Keyboard.input();
            return false;
        }
        const date = DateTime.now()
        const birthdateFormatted = DateTime.fromFormat(birthdate, 'dd/LL/yyyy');

        if (birthdateFormatted > date ||
            date.minus(Duration.fromObject({ years: 130})) > birthdateFormatted) {
                Interface.print('birthdateNotValid');
                Keyboard.input();
                return false;
        }
        
        if (date.minus(Duration.fromObject({ years: 13})) < birthdateFormatted) {
            Interface.print('birthdateNotValidYearsOld');
            Keyboard.input();
            return false;
        }

        return true;
    }

    isPatientNew(cpf) {
        if (!this.#patients.some(patient => patient.cpf === cpf)) {
            return true;
        } else {
            Interface.print('patientAlreadyExists');
            Keyboard.input();
            return false;
        }
    }

    newPatient(cpf, username, birthdate) {
        if (this.isCPFValid(cpf) && this.isUsernameValid(username) && this.isBirthdateValid(birthdate) && this.isPatientNew(cpf)) {
            let patient1 = new Patient(cpf, username, birthdate);
            this.#patients.push(patient1);
            return patient1;
        }
        return false;
    }
}
