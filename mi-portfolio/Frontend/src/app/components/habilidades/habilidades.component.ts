import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadesList1:any;
  habilidadesList2:any;

  constructor(private dataSoftskill:HabilidadesService) { }

  ngOnInit(): void {
    this.dataSoftskill.getSoftskill().subscribe(data => {
      this.habilidadesList1 = data.slice(0, data.length/2);
      this.habilidadesList2 = data.slice(data.length/2);
    })
  }

}
