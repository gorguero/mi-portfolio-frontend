import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-admi',
  templateUrl: './educacion-admi.component.html',
  styleUrls: ['./educacion-admi.component.css']
})
export class EducacionAdmiComponent implements OnInit {

  educacionList:any;

  link_logo:string = '';
  nombreInsti:string = '';
  titulo:string = '';
  fechaInicio:string = '';
  fechaFinal:string = '';

  link_logo_edit:string = '';
  nombreInsti_edit:string = '';
  titulo_edit:string = '';
  fechaInicio_edit:string = '';
  fechaFinal_edit:string = '';

  formEducacion:FormGroup;
  form_edit:FormGroup;

  educacion:Educacion;
  idCompenenteEdit:any;

  constructor(private dataEducacion:EducacionService, private formBuilder:FormBuilder) {
    this.formEducacion = this.formBuilder.group(
      {
        link_logo:['',[Validators.required]],
        nombreInsti:['',[Validators.required]],
        titulo:['',[Validators.required]],
        fechaInicio:['',[Validators.required]],
        fechaFinal:['',[Validators.required]]
      }
    );

    this.form_edit = this.formBuilder.group(
      {
        link_logo_edit:['',[Validators.required]],
        nombreInstitucion_edit:['',[Validators.required]],
        titulo_edit:['',[Validators.required]],
        fechaInicio_edit:['',[Validators.required]],
        fechaFin_edit:['',[Validators.required]]
      }
    )
  }
  

  ngOnInit(): void {
    this.ObtenerEducacion();
  }

  public ObtenerEducacion(){
    this.dataEducacion.getEducacion().subscribe(data => {
      this.educacionList = data;
    })
  }

  public obtenerId(idEducacion?:number){
    this.idCompenenteEdit = idEducacion;

    this.dataEducacion.detail(this.idCompenenteEdit).subscribe(
      data => {
        this.educacion = data;
      }
    )

  }

  public AgregarEducacion(){

    this.link_logo = this.LinkLogo?.value;
    this.nombreInsti = this.NombreInstitucion?.value;
    this.titulo = this.Titulo?.value;
    this.fechaInicio = this.FechaInicio?.value;
    this.fechaFinal = this.FechaFin?.value;

    const educacion = new Educacion(this.nombreInsti, this.link_logo, this.titulo, this.fechaInicio, this.fechaFinal);

    this.dataEducacion.agregarEducacion(educacion).subscribe(
      data => {
        alert("Se agrego una nueva educación correctamente");
        this.ObtenerEducacion();
      }, err => {
        alert("No se pudo agregar una educación");
      }
    );

    this.form_edit.reset();
  }

  public eliminarEducacion(id:number){
    this.dataEducacion.eliminarEducacion(id).subscribe(
      data => {
        alert("Se ha eliminado correctamente");   
        this.ObtenerEducacion();    
      }
    );     
  } 

  public editarEducacion(){

    this.dataEducacion.detail(this.idCompenenteEdit).subscribe(
      data => {
        this.educacion = data;
      },err =>{
        alert("Error al modificar experiencia");
      }
    )

    this.educacion.link_logo = this.LinkLogoEdit?.value;
    this.educacion.nombreInsti = this.NombreInstitucionEdit?.value;
    this.educacion.titulo = this.TituloEdit?.value;
    this.educacion.fechaInicio = this.FechaInicioEdit?.value;
    this.educacion.fechaFinal = this.FechaFinEdit?.value;
  
    this.dataEducacion.editarEducacion(this.idCompenenteEdit, this.educacion).subscribe(
      data => {
        alert("Se actualizo la educación correctamente");
        this.ObtenerEducacion();
      }, err => {
        alert("No se pudo actualizar la educación");
      }
    );

    this.form_edit.reset();
  }

  get LinkLogo(){
    return this.formEducacion.get('link_logo');
  }

  get NombreInstitucion(){
    return this.formEducacion.get('nombreInsti');
  }

  get Titulo(){
    return this.formEducacion.get('titulo');
  }

  get FechaInicio(){
    return this.formEducacion.get('fechaInicio');
  }

  get FechaFin(){
    return this.formEducacion.get('fechaFinal');
  }

  get LinkLogoEdit(){
    return this.form_edit.get('link_logo_edit');
  }

  get NombreInstitucionEdit(){
    return this.form_edit.get('nombreInstitucion_edit');
  }

  get TituloEdit(){
    return this.form_edit.get('titulo_edit');
  }

  get FechaInicioEdit(){
    return this.form_edit.get('fechaInicio_edit');
  }

  get FechaFinEdit(){
    return this.form_edit.get('fechaFin_edit');
  }

}