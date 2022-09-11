export class ExperienciaLaboral{

    id?:number;
    nombreEmpresa:String;
    link_logo:String;
    nombrePuesto:String;
    fechaIngreso:String;
    fechaFin:String;

    constructor(nombreEmpresa:String, link_logo:String, nombrePuesto:String, fechaIngreso:String, fechaFin:String){
        this.nombreEmpresa = nombreEmpresa;
        this.link_logo = link_logo;
        this.nombrePuesto = nombrePuesto;
        this.fechaIngreso = fechaIngreso;
        this.fechaFin = fechaFin;
    }

}