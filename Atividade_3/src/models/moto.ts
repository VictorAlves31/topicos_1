export {Moto, Carro} 

class Veiculo {
    public marca:string = "";
    public modelo:string  = "";
    public categoria:string = "";
    private dono:string  = "";
}

class Moto extends Veiculo{
    public fork: "Telescópio" | "Telescópio invertido" = "Telescópio";
    freiar(){
        console.log("Freiou com a mão")
    }
}

class Carro extends Veiculo{
    freiar(){
        console.log("Freiou com a pé")
    }
}