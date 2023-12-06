"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FDM = exports.Impressora3D = void 0;
class Impressora3D {
    constructor() {
        // Atributos da clase
        this.marca = "";
        this.modelo = "";
        this.tipo = "";
    }
}
exports.Impressora3D = Impressora3D;
// Aplicação de herança
class FDM extends Impressora3D {
    constructor() {
        super(...arguments);
        this.filament = "";
    }
}
exports.FDM = FDM;
