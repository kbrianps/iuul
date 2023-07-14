export default class Patient {
    _cpf;
    _username;
    _birthdate;

    constructor(cpf, username, birthdate) {
        this._cpf = cpf;
        this._username = username;
        this._birthdate = birthdate;
    }
}