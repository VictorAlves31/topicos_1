"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando classes
const veiculo_1 = require("./models/veiculo");
const impressora_3D_1 = require("./models/impressora_3D");
const curso_1 = require("./models/curso");
// Instaciando o objeto Moto e herdando veículo
let moto = new veiculo_1.Moto();
moto.marca = "Yamaha";
moto.modelo = "MT 09";
moto.categoria = "Naked";
moto.fork = "Telescópio invertido";
// Aplicando método público e privado 
console.log(moto);
moto.freiar();
moto.getdono();
moto.setDono("Nome do dono: Jogno");
moto.getdono();
// Instanciando o objeto Carro e aplicando polimorfismo
let carro = new veiculo_1.Carro();
carro.freiar();
// Instaciando o objeto FDM e herdando Impressora 3D
let impressoraFdm = new impressora_3D_1.FDM();
impressoraFdm.marca = "Creality";
impressoraFdm.modelo = "K1 Max";
impressoraFdm.tipo = "FDM";
impressoraFdm.filament = "PLA";
console.log(impressoraFdm);
// Instanciando o objeto Curso
let curso = new curso_1.Curso();
curso.nome = "Sistemas da informção";
curso.area = "Tecnologia";
curso.duracao = "5";
console.log(curso);
