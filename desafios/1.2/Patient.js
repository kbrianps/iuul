export default class Patient {
    #cpf;
    #username;
    #birthdate;

    constructor(cpf, username, birthdate) {
        this.#cpf = cpf;
        this.#username = username;
        this.#birthdate = birthdate;
    }
}