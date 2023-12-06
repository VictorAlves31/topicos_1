import { Moto, Carro } from "./models/moto";
import {Impressora3D, FDM} from "./models/impressora_3D";
import { Curso } from "./models/curso";

let moto = new Moto();
moto.marca = "Yamaha";
moto.fork = "Telescópio invertido"

console.log(moto);
moto.freiar();

let carro = new Carro();
carro.freiar();

let impressora = new Impressora3D();
impressora.marca = "Creality";

console.log(impressora);

let impressoraFdm = new FDM();
impressoraFdm.filament = "PLA";

console.log(impressoraFdm);

let curso = new Curso();
curso.area = "Tecnologia";

console.log(curso);



