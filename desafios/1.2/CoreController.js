import Interface from "./Interface.js";
import Patient from "./Patient.js";
import PatientController from "./PatientController.js";
import Keyboard from "./Keyboard.js";

export default class CoreController {
    static runApplication() {
        while(true) {
            CoreController.menu();
        }
    }

    static menu(input) {
        if (input == undefined || input == '0') {
            Interface.print('main');
            let input = Keyboard.input().toString();
            CoreController.menu(input);
        }
        if (input === '1') {
            Interface.print('patients');
            let input = Keyboard.input().toString();
            if (input == 1) {
                while (true) {
                    let cpf = Keyboard.input(Interface.print('cpf'));
                    let username = Keyboard.input(Interface.print('username'));
                    let birthdate = Keyboard.input(Interface.print('birthdate'));
                    let patient = new PatientController().newPatient(cpf, username, birthdate);
                    if (patient != false) {
                        break;
                    }
                } 
            }
            if (input == 2) {
                
            }
            if (input == 3) {
                
            }
            if (input == 4) {
                
            }
            if (input == 5) {
                CoreController.menu();
            }
        }
        if (input === '2') {
            console.clear();
            Interface.print('schedule');
            let input = Keyboard.input().toString();
            CoreController.menu(input);
            if (input == 1) {

            }
            if (input == 2) {
                
            }
            if (input == 3) {
                
            }
            if (input == 4) {
                CoreController.menu();
            }
        }
        if (input === '3') {
            process.exit(0);
        }

    }
}