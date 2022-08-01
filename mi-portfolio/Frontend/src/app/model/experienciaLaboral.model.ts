export class ExperienciaLaboral{

    id?:number;
    nombreEmpresa:String;
    link_logo:String;
    nombrePuesto:String;
    fechaIngreso:String;
    fechaFin:String;

    constructor(id:number, nombreEmpresa:String, link_logo:String, nombrePuesto:String, fechaIngreso:String, fechaFin:String){
        this.id = id;
        this.nombreEmpresa = nombreEmpresa;
        this.link_logo = link_logo;
        this.nombrePuesto = nombrePuesto;
        this.fechaIngreso = fechaIngreso;
        this.fechaFin = fechaFin;
    }

}