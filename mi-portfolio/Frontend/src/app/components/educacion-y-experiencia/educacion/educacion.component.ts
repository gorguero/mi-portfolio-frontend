import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;

  constructor(private dataEducacion:EducacionService) { }

  ngOnInit(): void {
    this.dataEducacion.getEducacion().subscribe(data => {
      this.educacionList = data;
    })
  }

}
