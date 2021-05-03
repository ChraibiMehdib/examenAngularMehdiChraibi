export class ICar{
    public marque :string;
    public numeroImmatriculation :string;
    public nombreSieges :number;
    public couleurVoiture :string;
    
    constructor(marque: string, numeroImmatriculation: string, nombreSieges: number, couleurVoiture: string){
        this.marque=marque;
        this.numeroImmatriculation=numeroImmatriculation;
        this.nombreSieges= nombreSieges;
        this.couleurVoiture=couleurVoiture;
    }
    }