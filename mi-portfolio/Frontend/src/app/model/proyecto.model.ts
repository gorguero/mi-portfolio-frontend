export class Proyecto{

    id?:number;
    titulo:String;
    descripcion:String;
    link_portada:String;
    link_proyecto:String;
    tecnologias:String;

    constructor(titulo:String, descripcion:String, link_portada:String, link_proyecto:String, tecnologias:String){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link_portada = link_portada;
        this.link_proyecto = link_proyecto;
        this.tecnologias = tecnologias;
    }

}