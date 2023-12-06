export {Impressora3D, FDM} 

class Impressora3D{
    marca:string  = "";
    modelo:string  = "";
    tipo:string  = "";
}

class FDM extends Impressora3D {
    public filament:string  = "";
}

