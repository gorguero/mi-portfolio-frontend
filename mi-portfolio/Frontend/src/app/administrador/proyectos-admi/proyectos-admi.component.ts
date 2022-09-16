import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos-admi',
  templateUrl: './proyectos-admi.component.html',
  styleUrls: ['./proyectos-admi.component.css']
})
export class ProyectosAdmiComponent implements OnInit {

  proyectosList:any;

  formProyectos:FormGroup;
  formProyectosEdit:FormGroup;

  titulo:string;
  descripcion:string;
  link_portada:string;
  link_proyecto:string;
  tecnologias:string;

  titulo_edit:string;
  descripcion_edit:string;
  link_portada_edit:string;
  link_proyecto_edit:string;
  tecnologias_edit:string;

  proyecto:Proyecto;
  idComponentEdit:any;

  constructor(private proyectoService:ProyectoService, formBuilder:FormBuilder) {

    this.formProyectos = formBuilder.group(
      {
        titulo:[this.titulo, Validators.required],
        descripcion:[this.descripcion, Validators.required],
        link_portada:[this.link_portada, Validators.required],
        link_proyecto:[this.link_proyecto, Validators.required],
        tecnologias:[this.tecnologias, Validators.required]
      }
    );

    this.formProyectosEdit = formBuilder.group(
      {
        titulo_edit:[this.titulo_edit, Validators.required],
        descripcion_edit:[this.descripcion_edit, Validators.required],
        link_portada_edit:[this.link_portada_edit, Validators.required],
        link_proyecto_edit:[this.link_proyecto_edit, Validators.required],
        tecnologias_edit:[this.tecnologias_edit, Validators.required]
      }
    );

   }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  public obtenerProyectos(){
    this.proyectoService.getProyecto().subscribe(
      data => {
        this.proyectosList = data;
      }
    )
  }

  public obtenerId(idProyecto?:number){

    this.idComponentEdit = idProyecto;

    this.proyectoService.detail(this.idComponentEdit).subscribe(
      data => {
        this.proyecto = data;
      }
    )

  }

  public agregarProyecto(){

    this.titulo = this.Titulo?.value;
    this.descripcion = this.Descripcion?.value;
    this.link_portada = this.LinkPortada?.value;
    this.link_proyecto = this.LinkProyecto?.value;
    this.tecnologias = this.Tecnologias?.value;

    const proyecto = new Proyecto(this.titulo, this.descripcion, this.link_portada, this.link_proyecto, this.tecnologias);

    this.proyectoService.agregarProyecto(proyecto).subscribe(
      data => {
        alert("Se agrego un nuevo proyecto correctamente");
        this.obtenerProyectos();
      }
    );
    
    this.formProyectos.reset();

  }

  public eliminarProyecto(id?:number){
    
    if(id != undefined){

      this.proyectoService.eliminarProyecto(id).subscribe(
        data => {
          alert("Se ha eliminado correctamente.");
          this.obtenerProyectos();
        },
        err => {
          alert("Ha ocurrido un problema al eliminar");
        }
      )

    }

  }

  public editarProyecto(){

    this.proyectoService.detail(this.idComponentEdit).subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        alert("Error al modificar proyecto");
      }
    );

    this.proyecto.titulo = this.TituloEdit?.value;
    this.proyecto.descripcion = this.DescripcionEdit?.value;
    this.proyecto.link_portada = this.LinkPortadaEdit?.value;
    this.proyecto.link_proyecto = this.LinkProyectoEdit?.value;
    this.proyecto.tecnologias = this.TecnologiasEdit?.value;

    this.proyectoService.editarProyecto(this.idComponentEdit, this.proyecto).subscribe(
      data => {
        alert("Se ha editado correctamente");
        this.obtenerProyectos();
      }
    )
    
    this.formProyectosEdit.reset();
  }

  /* Getters del formulario */
  get Titulo(){
    return this.formProyectos.get('titulo');
  }

  get Descripcion(){
    return this.formProyectos.get('descripcion');
  }

  get LinkPortada(){
    return this.formProyectos.get('link_portada');
  }

  get LinkProyecto(){
    return this.formProyectos.get('link_proyecto');
  }

  get Tecnologias(){
    return this.formProyectos.get('tecnologias');
  }


  get TituloEdit(){
    return this.formProyectosEdit.get('titulo_edit');
  }

  get DescripcionEdit(){
    return this.formProyectosEdit.get('descripcion_edit');
  }

  get LinkPortadaEdit(){
    return this.formProyectosEdit.get('link_portada_edit');
  }

  get LinkProyectoEdit(){
    return this.formProyectosEdit.get('link_proyecto_edit');
  }

  get TecnologiasEdit(){
    return this.formProyectosEdit.get('tecnologias_edit');
  }

}
