import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { Habilidades } from 'src/app/model/habilidades.model';

@Component({
  selector: 'app-habilidades-admi',
  templateUrl: './habilidades-admi.component.html',
  styleUrls: ['./habilidades-admi.component.css']
})
export class HabilidadesAdmiComponent implements OnInit {

  habilidadesList:any;

  nombreSkill:string;
  nivelSkill:number;

  nombreSkill_edit:string;
  nivelSkill_edit:number;

  formSkill:FormGroup;
  formSkill_edit:FormGroup;

  idComponentEdit: any;
  softskill:Habilidades;

  constructor(private softskilService:HabilidadesService, private formBuilder:FormBuilder) {
    this.formSkill = formBuilder.group(
      {
        nombreSkill:[this.nombreSkill,Validators.required],
        nivelSkill:[this.nivelSkill,Validators.required, Validators.min(0), Validators.max(100)]
      }
    );
    this.formSkill_edit = formBuilder.group(
      {
        nombreSkill_edit:[this.nombreSkill_edit,Validators.required],
        nivelSkill_edit:[this.nivelSkill_edit,Validators.required, Validators.min(0), Validators.max(100)]
      }
    )
   }

  ngOnInit(): void {
    this.ObtenerHabilidades();
  }

  /* Métodos para el crud */

  public obtenerId(idSkill?:number){
    
    this.idComponentEdit = idSkill;

    this.softskilService.detail(this.idComponentEdit).subscribe(
      data => {
        this.softskill = data;
      }
    )

  }

  public ObtenerHabilidades(){
    this.softskilService.getSoftskill().subscribe(
      data => {
        this.habilidadesList = data;
      }
    )
  }

  public agregarSoftskill(){

    this.nombreSkill = this.NombreSkill?.value;
    this.nivelSkill = this.NivelSkill?.value;

    const softskill = new Habilidades(this.nombreSkill, this.nivelSkill);

    if(this.nivelSkill >=0 && this.nivelSkill <= 100){
      this.softskilService.agregarSoftskill(softskill).subscribe(
        data => {
          alert("Se agrego una nueva softskill correctamente");
          this.ObtenerHabilidades();
        }
      )
    }

    this.formSkill.reset();
  }

  public eliminarSoftskill(id?:number){

    if(id != undefined){

      this.softskilService.eliminarSoftskill(id).subscribe(
        data => {
          alert("Se ha elimnado correctamente");
          this.ObtenerHabilidades();
        }, 
        err => {
          alert("Ha ocurrido un problema al eliminar.");
        }
      )

    }

  }

  public editarSoftskill(){

    this.softskilService.detail(this.idComponentEdit).subscribe(
      data => {
        this.softskill = data;
      }, err =>{
        alert("Error al modificar softskill");
      }
    )

    this.softskill.nombre = this.NombreSkillEdit?.value;
    this.softskill.nivel = this.NivelSkillEdit?.value;

    this.softskilService.editarSoftskill(this.idComponentEdit, this.softskill).subscribe(
      data => {
        alert("Se edito correctamente");
        this.ObtenerHabilidades();
      }
    )

    this.formSkill_edit.reset();

  }

  /* Getters del formulario */
  get NombreSkill(){
    return this.formSkill.get('nombreSkill');
  }

  get NivelSkill(){
    return this.formSkill.get('nivelSkill');
  }

  get NombreSkillEdit(){
    return this.formSkill_edit.get('nombreSkill_edit');
  }

  get NivelSkillEdit(){
    return this.formSkill_edit.get('nivelSkill_edit');
  }

}
