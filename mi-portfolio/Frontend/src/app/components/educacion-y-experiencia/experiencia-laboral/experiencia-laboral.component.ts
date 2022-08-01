import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/servicios/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  expLaboralList:any;

  constructor(private dataExpLaboral:ExperienciaLaboralService) { }

  ngOnInit(): void {
    this.dataExpLaboral.getExperienciaLaboral().subscribe( data => {
      this.expLaboralList = data;
    });
  }

}
