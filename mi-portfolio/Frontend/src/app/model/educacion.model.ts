export class Educacion{

    id?:number;
    nombreInstitucion:String;
    link_logo:String;
    titulo:String;
    fechaInicio:String;
    fechaFin:String;

    constructor(id:number, nombreInstitucion:String, link_logo:String, titulo:String, fechaInicio:String, fechaFin:String){
        this.id = id;
        this.nombreInstitucion = nombreInstitucion;
        this.link_logo = link_logo;
        this.titulo = titulo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

}