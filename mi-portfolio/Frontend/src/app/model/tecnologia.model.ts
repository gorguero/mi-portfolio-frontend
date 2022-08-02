export class Tecnologia{

    id?:number;
    nombre:String;
    link_logo:String;

    constructor(id:number, nombre:String, link_logo:String){
        this.id = id;
        this.nombre = nombre;
        this.link_logo = link_logo;
    }

}