import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css'],
})
export class MiperfilComponent implements OnInit {
  personaList: any;

  formPersonaEdit: FormGroup;

  nombre_edit: String;
  apellido_edit: String;
  presentacionUno_edit: String;
  presentacionDos_edit: String;
  telefono_edit: String;
  email_edit: String;
  ubicacion_edit: String;
  link_perfil_edit: String;
  perfilLaboral_edit: String;

  idComponentEdit: any;
  persona: Persona;

  constructor(private personasService: PersonaService, private formBuilder: FormBuilder) {

    this.formPersonaEdit = formBuilder.group(
      {
        nombre_edit:[this.nombre_edit, Validators.required],
        apellido_edit:[this.apellido_edit, Validators.required],
        presentacionUno_edit:[this.presentacionUno_edit, Validators.required, Validators.maxLength(255)],
        presentacionDos_edit:[this.presentacionDos_edit, Validators.required, Validators.maxLength(255)],
        telefono_edit:[this.telefono_edit, Validators.required],
        email_edit:[this.email_edit, Validators.required],
        ubicacion_edit:[this.ubicacion_edit, Validators.required],
        link_perfil_edit:[this.link_perfil_edit, Validators.required],
        perfilLaboral_edit:[this.perfilLaboral_edit, Validators.required]
      }
    )

  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  public obtenerDatos() {
    this.personasService.getPersona().subscribe((data) => {
      this.personaList = data;
    });
  }

  public obtenerId(idPersona?:number){
    
    this.idComponentEdit = idPersona;

    this.personasService.detail(this.idComponentEdit).subscribe(
      data => {
        this.persona = data;
      }
    )

  }

  public editarSoftskill(){

    this.personasService.detail(this.idComponentEdit).subscribe(
      data => {
        this.persona = data;
      }, err =>{
        alert("Error al modificar persona");
      }
    )

    this.persona.nombre = this.NombreEdit?.value;
    this.persona.apellido = this.ApellidoEdit?.value;
    this.persona.presentacionUno = this.PresentacionUnoEdit?.value;
    this.persona.presentacionDos = this.PresentacionDosEdit?.value;
    this.persona.telefono = this.TelefonoEdit?.value;
    this.persona.email = this.EmailEdit?.value;
    this.persona.ubicacion = this.UbicacionEdit?.value;
    this.persona.link_perfil = this.LinkPerfilEdit?.value;
    this.persona.perfilLaboral = this.PerfilLaboralEdit?.value;

    this.personasService.editarSoftskill(this.idComponentEdit, this.persona).subscribe(
      data => {
        alert("Se edito correctamente");
        this.obtenerDatos();
      }
    )

    this.formPersonaEdit.reset();

  }

  /* Getters para el form */
  
  get NombreEdit(){
    return this.formPersonaEdit.get('nombre_edit');
  }

  get ApellidoEdit(){
    return this.formPersonaEdit.get('apellido_edit');
  }

  get PresentacionUnoEdit(){
    return this.formPersonaEdit.get('presentacionUno_edit');
  }

  get PresentacionDosEdit(){
    return this.formPersonaEdit.get('presentacionDos_edit');
  }

  get TelefonoEdit(){
    return this.formPersonaEdit.get('telefono_edit');
  }

  get EmailEdit(){
    return this.formPersonaEdit.get('email_edit');
  }

  get UbicacionEdit(){
    return this.formPersonaEdit.get('ubicacion_edit');
  }

  get LinkPerfilEdit(){
    return this.formPersonaEdit.get('link_perfil_edit');
  }

  get PerfilLaboralEdit(){
    return this.formPersonaEdit.get('perfilLaboral_edit');
  }

}
