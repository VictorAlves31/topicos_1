// Importando classes
import { Moto, Carro } from "./models/veiculo";
import {Impressora3D, FDM} from "./models/impressora_3D";
import { Curso } from "./models/curso";

// Instaciando o objeto Moto e herdando veículo
let moto = new Moto();
moto.marca = "Yamaha";
moto.modelo = "MT 09"
moto.categoria = "Naked"
moto.fork = "Telescópio invertido";
 
// Aplicando método público e privado 
console.log(moto);
moto.freiar();
moto.getdono()
moto.setDono("Nome do dono: Jogno")
moto.getdono()

// Instanciando o objeto Carro e aplicando polimorfismo
let carro = new Carro();
carro.freiar();

// Instaciando o objeto FDM e herdando Impressora 3D
let impressoraFdm = new FDM();
impressoraFdm.marca = "Creality";
impressoraFdm.modelo = "K1 Max";
impressoraFdm.tipo = "FDM";
impressoraFdm.filament = "PLA";

console.log(impressoraFdm);

// Instanciando o objeto Curso
let curso = new Curso();
curso.nome = "Sistemas da informção"
curso.area = "Tecnologia";
curso.duracao = "5"

console.log(curso);



