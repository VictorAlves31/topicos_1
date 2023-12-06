// Classe Curso
export {Curso};

class Curso{
    // Atributos da clase
    public nome:string  = "";
    public area:string  = "";
    public duracao:string  = "";
}

// Aplicação de herança
class tecnologia extends Curso {
    public engenharia:string  = "";
}