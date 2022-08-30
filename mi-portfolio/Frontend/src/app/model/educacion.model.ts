export class Educacion{

    id?:number;
    nombreInsti:string;
    link_logo:string;
    titulo:string;
    fechaInicio:string;
    fechaFinal:string;

    constructor(nombreInsti:string, link_logo:string, titulo:string, fechaInicio:string, fechaFinal:string){
        this.nombreInsti = nombreInsti;
        this.link_logo = link_logo;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
    }

}