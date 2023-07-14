export default class Schedule {
    #cpf;
    #date;
    #start;
    #end;

    constructor(Patient, date, start, end) {
        this.#cpf = Patient.cpf;
        this.#date = date;
        this.#start = start;
        this.#end = end;
    }

    isPatientRegistered(Patient) {
        return Patient.isPatientNew(cpf)
    }
}