// Classe veículo
export {Moto, Carro} 

class Veiculo {
    // Atributos da clase
    public marca:string = "";
    public modelo:string  = "";
    public categoria:string = "";
    private dono:string  = "";

    // Método para acesar atributo privado
    getdono() {
        console.log(this.dono);
    }

    // Método para alterar atributo privado
    setDono(nome:string){
        this.dono = nome;
    }
}

// Aplicação de herança
class Moto extends Veiculo{
    public fork: "Telescópio" | "Telescópio invertido" = "Telescópio";
    // Aplicação de polimorfismo
    freiar(){
        console.log("Freiou com a mão");
    }
}

// Aplicação de herança
class Carro extends Veiculo{
    // Aplicação de polimorfismo
    freiar(){
        console.log("Freiou com a pé");
    }
}

