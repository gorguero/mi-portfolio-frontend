export class Usuario{

    id?:number;
    nombre:String;
    apellido:String;
    presentacionUno:String;
    presentacionDos:String;
    telefono:String;
    email:String;
    ubicacion:String;
    link_perfil:String;
    perfilLaboral:String;

    constructor(nombre:String, apellido:String, presentacionUno:String, presentacionDos:String, telefono:String, email:String, ubicacion:String, link_perfil:String, perfilLaboral:String){
        this.id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.presentacionUno = presentacionUno;
        this.presentacionDos = presentacionDos;
        this.telefono = telefono;
        this.email = email;
        this.ubicacion = ubicacion;
        this.link_perfil = link_perfil;
        this.perfilLaboral = perfilLaboral;
    }

}