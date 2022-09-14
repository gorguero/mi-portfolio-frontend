import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TecnologiaService } from 'src/app/servicios/tecnologia.service';
import { Tecnologia } from 'src/app/model/tecnologia.model';

@Component({
  selector: 'app-tecnologias-admi',
  templateUrl: './tecnologias-admi.component.html',
  styleUrls: ['./tecnologias-admi.component.css']
})
export class TecnologiasAdmiComponent implements OnInit {

  tecnologiaList:any;

  nombreTecnologia:string;
  link_logo:string;

  nombreTecnologia_edit:string;
  link_logo_edit:string;

  formTecnologia:FormGroup;
  formTecnologiaEdit:FormGroup;

  idComponentEdit:any;
  tecnologia:Tecnologia;

  constructor(private tecnologiaService:TecnologiaService, private formBuilder:FormBuilder) { 
    
    this.formTecnologia = formBuilder.group(
      {
        nombreTecnologia:[this.nombreTecnologia, Validators.required],
        link_logo:[this.link_logo, Validators.required]
      }
    );

    this.formTecnologiaEdit = formBuilder.group(
      {
        nombreTecnologia_edit:[this.nombreTecnologia_edit, Validators.required],
        link_logo_edit:[this.link_logo_edit, Validators.required]
      }
    );

  }

  ngOnInit(): void {
    this.ObtenerTecnologias();
  }

  public ObtenerTecnologias(){
    this.tecnologiaService.getTenologia().subscribe(
      data => {
        this.tecnologiaList = data;
      }
    );
  }

  public obtenerId(idSkill?:number){
    
    this.idComponentEdit = idSkill;

    this.tecnologiaService.detail(this.idComponentEdit).subscribe(
      data => {
        this.tecnologia = data;
      }
    )

  }

  public agregarTecnologia(){
    
    this.nombreTecnologia = this.NombreTecnologia?.value;
    this.link_logo = this.LinkLogo?.value;

    const tecnologia = new Tecnologia(this.nombreTecnologia, this.link_logo);

    this.tecnologiaService.agregarTecnologia(tecnologia).subscribe(
      data => {
        alert("Se agrego una nueva tecnologia correctamente");
        this.ObtenerTecnologias();
      }
    )
    
  }

  public eliminarTecnologia(id?:number){
    
    if(id != undefined){

      this.tecnologiaService.eliminarTecnologia(id).subscribe(
        data => {
          alert("Se ha eliminado correctamente.");
          this.ObtenerTecnologias();
        },
        err => {
          alert("Ha ocurrido un problema al eliminar.");
        }
      )

    }

  }

  public editarSoftskill(){

    this.tecnologiaService.detail(this.idComponentEdit).subscribe(
      data => {
        this.tecnologia = data;
        console.log(this.tecnologia)
      },
      err => {
        alert("Error al modificar la tecnologia");
      }
    );

    this.tecnologia.nombre = this.NombreTecnologiaEdit?.value;
    this.tecnologia.link_logo = this.LinkLogoEdit?.value;

    this.tecnologiaService.editarTecnologia(this.idComponentEdit, this.tecnologia).subscribe(
      data => {
        alert("Se edito correctamente");
        this.ObtenerTecnologias();
      }
    )
    
    this.formTecnologia.reset();
  }

  /* Getter del formulario */
  get NombreTecnologia(){
    return this.formTecnologia.get('nombreTecnologia');
  }

  get LinkLogo(){
    return this.formTecnologia.get('link_logo');
  }

  get NombreTecnologiaEdit(){
    return this.formTecnologiaEdit.get('nombreTecnologia_edit');
  }

  get LinkLogoEdit(){
    return this.formTecnologiaEdit.get('link_logo_edit');
  }

}
