import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experienciaLaboral.model';
import { ExperienciaLaboralService } from 'src/app/servicios/experiencia-laboral.service';

@Component({
  selector: 'app-experiencialab-admi',
  templateUrl: './experiencialab-admi.component.html',
  styleUrls: ['./experiencialab-admi.component.css']
})
export class ExperiencialabAdmiComponent implements OnInit {

  nombreEmpresa:string = '';
  link_logo:string = '';
  nombrePuesto:string = '';
  fechaIngreso:string = '';
  fechaFin:string = '';

  nombreEmpresaEdit:string = '';
  link_logo_Edit:string = '';
  nombrePuestoEdit:string = '';
  fechaIngresoEdit:string = '';
  fechaFinEdit:string = '';

  experienciaLaboralList:any;
  expLaboral:ExperienciaLaboral;
  idComponenteEdit:any;

  formExpLaboral:FormGroup;
  form_edit:FormGroup;

  constructor(private dataExpLaboral: ExperienciaLaboralService, private formBuilder:FormBuilder) { 
    this.formExpLaboral = this.formBuilder.group(
      {
        nombreEmpresa:['',[Validators.required]],
        link_logo:['',[Validators.required]],
        nombrePuesto:['',[Validators.required]],
        fechaIngreso:['',[Validators.required]],
        fechaFin:['',[Validators.required]]
      }
    );
    this.form_edit = this.formBuilder.group(
      {
        nombreEmpresaEdit:['',[Validators.required]],
        link_logo_Edit:['',[Validators.required]],
        nombrePuestoEdit:['',[Validators.required]],
        fechaIngresoEdit:['',[Validators.required]],
        fechaFinEdit:['',[Validators.required]]
      }
    );
  }

  ngOnInit(): void {
    this.ObtenerExperienciaLaboral();
  }

  public ObtenerExperienciaLaboral(){
    this.dataExpLaboral.getExperienciaLaboral().subscribe(data => {
      this.experienciaLaboralList = data;
    })
  }

  public obtenerId(idExpLaboral?:number){
    this.idComponenteEdit = idExpLaboral;

    this.dataExpLaboral.detail(this.idComponenteEdit).subscribe(
      data => {
        this.expLaboral = data;
      }
    )

  }

  public AgregarExperiencia(){
    
    this.link_logo = this.Link_Logo?.value;
    this.nombreEmpresa = this.NombreEmpresa?.value;
    this.nombrePuesto = this.NombrePuesto?.value;
    this.fechaIngreso = this.FechaIngreso?.value;
    this.fechaFin = this.FechaFin?.value;

    const experienciaLaboral = new ExperienciaLaboral(this.nombreEmpresa,this.link_logo,this.nombrePuesto,this.fechaIngreso,this.fechaFin);

    this.dataExpLaboral.agregarExperienciaLaboral(experienciaLaboral).subscribe(
      data => {
        alert("Se agrego una nueva experiencia correctamente");
        this.ObtenerExperienciaLaboral();
      }
    )
    
    this.formExpLaboral.reset();

  }

  public eliminarExpLaboral(id?:number){
    if(id != undefined){
      this.dataExpLaboral.eliminarExperienciaLaboral(id).subscribe(
        data => {
          alert("Se ha eliminado correctamente.");
          this.ObtenerExperienciaLaboral();
        }, err => {
          alert("Ha ocurrido un problema al eliminar.");
        }
      )
    }
  }

  public editarExpLaboral(){
    
    this.dataExpLaboral.detail(this.idComponenteEdit).subscribe(
      data => {
        this.expLaboral = data;
      },err =>{
        alert("Error al modificar experiencia");
      }
    )

    this.expLaboral.link_logo = this.Link_Logo_Edit?.value;
    this.expLaboral.nombreEmpresa = this.NombreEmpresaEdit?.value;
    this.expLaboral.nombrePuesto = this.NombrePuestoEdit?.value;
    this.expLaboral.fechaIngreso = this.FechaIngresoEdit?.value;
    this.expLaboral.fechaFin = this.FechaFinEdit?.value;

    this.dataExpLaboral.editarExperienciaLaboral(this.idComponenteEdit,this.expLaboral).subscribe(
      data => {
        alert("Se edito correctamente");
        this.ObtenerExperienciaLaboral();
      }
    )

    this.form_edit.reset();

  }

  /* GETTERS DEL FORMULARIO */

  get NombreEmpresa(){
    return this.formExpLaboral.get('nombreEmpresa');
  }

  get Link_Logo(){
    return this.formExpLaboral.get('link_logo');
  }

  get NombrePuesto(){
    return this.formExpLaboral.get('nombrePuesto');
  }

  get FechaIngreso(){
    return this.formExpLaboral.get('fechaIngreso');
  }

  get FechaFin(){
    return this.formExpLaboral.get('fechaFin');
  }

  get NombreEmpresaEdit(){
    return this.form_edit.get('nombreEmpresaEdit');
  }

  get Link_Logo_Edit(){
    return this.form_edit.get('link_logo_Edit');
  }

  get NombrePuestoEdit(){
    return this.form_edit.get('nombrePuestoEdit');
  }

  get FechaIngresoEdit(){
    return this.form_edit.get('fechaIngresoEdit');
  }

  get FechaFinEdit(){
    return this.form_edit.get('fechaFinEdit');
  }

}
