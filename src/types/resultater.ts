export interface Disciplin {
    id: number;
    navn: string;
  }
  
  export interface Resultat {
    id: number;
    resultat: string;
    dato: string;
    score: number;
    deltager: Deltager;
    disciplin: Disciplin;
  }
  
  export interface Deltager {
    id: number;
    navn: string;
    klub: string;
    koen: string;
    alder: number;
    discipliner: Disciplin[];
    resultater: Resultat[];
  }
  