// Classe Impressora 3D
export {Impressora3D, FDM} 

class Impressora3D{
    // Atributos da clase
    public marca:string  = "";
    public modelo:string  = "";
    public tipo:string  = "";
}

// Aplicação de herança
class FDM extends Impressora3D {
    public filament:string  = "";
}

