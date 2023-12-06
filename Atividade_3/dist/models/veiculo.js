"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = exports.Moto = void 0;
class Veiculo {
    constructor() {
        // Atributos da clase
        this.marca = "";
        this.modelo = "";
        this.categoria = "";
        this.dono = "";
    }
    // Método para acesar atributo privado
    getdono() {
        console.log(this.dono);
    }
    // Método para alterar atributo privado
    setDono(nome) {
        this.dono = nome;
    }
}
// Aplicação de herança
class Moto extends Veiculo {
    constructor() {
        super(...arguments);
        this.fork = "Telescópio";
    }
    // Aplicação de polimorfismo
    freiar() {
        console.log("Moto: Freiou com a mão");
    }
}
exports.Moto = Moto;
// Aplicação de herança
class Carro extends Veiculo {
    // Aplicação de polimorfismo
    freiar() {
        console.log("Carro: Freiou com o pé");
    }
}
exports.Carro = Carro;
