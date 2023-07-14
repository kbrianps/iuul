import Patient from "../models/Patient.js";
import Interface from "../views/Interface.js";
import Keyboard from "../models/Keyboard.js";
import { DateTime, Duration } from "luxon";

export default class PatientController {
    
    static isCPFValid(cpf) {

        let j = 0;
        let k = 0;
        let sum = 0;

        cpf = cpf.toString().replace(/[^\d]+/g, '').split('').map(numStr => parseInt(numStr));
        if (cpf.length != 11 || new Set(cpf).size == 1) {
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
            return false;
        }

    }

    static isUsernameValid(username) {
        if (username.length >= 5) {
            return true;
        } else {
            return false;
        }
    }

    static isBirthdateValid(birthdate) {

        const regexp = new RegExp('\\d{2}/\\d{2}/\\d{4}', 'g')
        if (!regexp.test(birthdate)) {
            return false;
        }
        const date = DateTime.now()
        const birthdateFormatted = DateTime.fromFormat(birthdate, 'dd/LL/yyyy');

        if (birthdateFormatted > date ||
            date.minus(Duration.fromObject({ years: 130})) > birthdateFormatted) {
                return false;
        }
        
        if (date.minus(Duration.fromObject({ years: 13})) < birthdateFormatted) {
            return false;
        }

        return true;

    }

    static isPatientNew(Patients) {
        if (Patients.patients.some(patient => patient.cpf === cpf)) {
            return true;
        } else {
            return false;
        }
    }

    static newPatient(cpf, username, birthdate) {
        let patient = new Patient(cpf, username, birthdate);
        return patient;
    }

}