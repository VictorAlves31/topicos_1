"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
class Curso {
    constructor() {
        // Atributos da clase
        this.nome = "";
        this.area = "";
        this.duracao = "";
    }
}
exports.Curso = Curso;
// Aplicação de herança
class tecnologia extends Curso {
    constructor() {
        super(...arguments);
        this.engenharia = "";
    }
}
