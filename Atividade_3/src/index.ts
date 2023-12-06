// Importando classes
import { Moto, Carro } from "./models/veiculo";
import {Impressora3D, FDM} from "./models/impressora_3D";
import { Curso } from "./models/curso";

// Instaciando o objeto Moto e herdando veículo
let moto = new Moto();
moto.marca = "Yamaha";
moto.fork = "Telescópio invertido"
 
// Aplicando método público e privado 
console.log(moto);
moto.freiar();
moto.getdono()
moto.setDono("Jogno")
moto.getdono()

// Instanciando o objeto Carro e aplicando polimorfismo
let carro = new Carro();
carro.freiar();

// Instanciando o objeto Impressora 3D
let impressora = new Impressora3D();
impressora.marca = "Creality";

console.log(impressora);

// Instaciando o objeto FDM e herdando Impressora 3D
let impressoraFdm = new FDM();
impressoraFdm.filament = "PLA";

console.log(impressoraFdm);

// Instanciando o objeto Curso
let curso = new Curso();
curso.area = "Tecnologia";

console.log(curso);



