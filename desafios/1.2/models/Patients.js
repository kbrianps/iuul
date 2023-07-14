export default class Patients {

    members;

    constructor() {
        this.members = [];
    }

    addNewPatient(patient) {
        this.members.push(patient)
    }
}