export {};

class Moto{
    marca:string
    modelo:string
    categoria:string   
}

let moto_1 = new Moto();
moto_1.marca = "Yamaha";
moto_1.modelo = "MT10";
moto_1.categoria = "Naked";

console.log(moto_1);

let moto_2 = new Moto();
moto_2.marca = "Kawasaki";
moto_2.modelo = "H2";
moto_2.categoria = "Superbike";

console.log(moto_2);

let moto_3 = new Moto();
moto_3.marca = "BMW";
moto_3.modelo = "R 1250 GS";
moto_3.categoria = "Big Trail";

console.log(moto_3);


class Impressora3D{
    marca:string
    modelo:string
    tipo:string
}

let impressora3D_1 = new Impressora3D();
impressora3D_1.marca = "Sethi3D"
impressora3D_1.modelo= "S4X"
impressora3D_1.tipo = "FDM"


console.log(impressora3D_1);

let impressora3D_2 = new Impressora3D();
impressora3D_2.marca = "Creality"
impressora3D_2.modelo= "Ender 3"
impressora3D_2.tipo = "FDM"


console.log(impressora3D_2);

let impressora3D_3 = new Impressora3D();
impressora3D_3.marca = "Creatily"
impressora3D_3.modelo= "Halot lite"
impressora3D_3.tipo = "SLA"


console.log(impressora3D_3);

class Curso{
    nome:string
    area:string
    duracao:string
}

let curso_1 = new Curso();
curso_1.nome = "Engenharia de controle e automação"
curso_1.area = "Tecnologia"
curso_1.duracao = "10 períodos"

console.log(curso_1);

let curso_2 = new Curso();
curso_2.nome = "Odontologia"
curso_2.area = "Saúde"
curso_2.duracao = "10 períodos"

console.log(curso_2);

let curso_3 = new Curso();
curso_3.nome = "Sistemas de informação"
curso_3.area = "Tecnologia"
curso_3.duracao = "10 períodos"


console.log(curso_3);