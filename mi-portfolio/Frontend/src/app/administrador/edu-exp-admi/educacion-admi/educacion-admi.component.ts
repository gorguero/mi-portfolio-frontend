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

  form:FormGroup;
  form_edit:FormGroup;

  constructor(private dataEducacion:EducacionService, private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        link_logo:['',[Validators.required]],
        nombreInstitucion:['',[Validators.required]],
        titulo:['',[Validators.required]],
        fechaInicio:['',[Validators.required]],
        fechaFin:['',[Validators.required]]
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
      console.log(this.educacionList)
    })
  }

  public AgregarEducacion(){

    this.link_logo = this.LinkLogo?.value;
    this.nombreInsti = this.NombreInstitucion?.value;
    this.titulo = this.Titulo?.value;
    this.fechaInicio = this.FechaInicio?.value;
    this.fechaFinal = this.FechaFin?.value;

    console.log(this.nombreInsti, this.fechaFinal);

    const educacion = new Educacion(this.nombreInsti, this.link_logo, this.titulo, this.fechaInicio, this.fechaFinal);

    console.log(educacion);

    this.dataEducacion.agregarEducacion(educacion).subscribe(
      data => {
        console.log(data);
        alert("Se agrego una nueva educación correctamente");
        this.ObtenerEducacion();
      }, err => {
        console.log(err);
        alert("No se pudo agregar una educación");
      }
    );

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

    this.link_logo = this.LinkLogoEdit?.value;
    this.nombreInsti = this.NombreInstitucionEdit?.value;
    this.titulo = this.TituloEdit?.value;
    this.fechaInicio = this.FechaInicioEdit?.value;
    this.fechaFinal = this.FechaFinEdit?.value;

    const educacionEdit = new Educacion(this.nombreInsti, this.link_logo, this.titulo, this.fechaInicio, this.fechaFinal);

    console.log(educacionEdit);

    this.dataEducacion.editarEducacion(educacionEdit).subscribe(
      data => {
        console.log(data);
        alert("Se actualizo correctamente");
        this.ObtenerEducacion();
      }, err => {
        console.log(err);
        alert("No se pudo actualizar la educación");
      }
    );
  }

  get LinkLogo(){
    return this.form.get('link_logo');
  }

  get NombreInstitucion(){
    return this.form.get('nombreInstitucion');
  }

  get Titulo(){
    return this.form.get('titulo');
  }

  get FechaInicio(){
    return this.form.get('fechaInicio');
  }

  get FechaFin(){
    return this.form.get('fechaFin');
  }

  get LinkLogoEdit(){
    return this.form.get('link_logo_edit');
  }

  get NombreInstitucionEdit(){
    return this.form.get('nombreInstitucion_edit');
  }

  get TituloEdit(){
    return this.form.get('titulo_edit');
  }

  get FechaInicioEdit(){
    return this.form.get('fechaInicio_edit');
  }

  get FechaFinEdit(){
    return this.form.get('fechaFin_edit');
  }

}