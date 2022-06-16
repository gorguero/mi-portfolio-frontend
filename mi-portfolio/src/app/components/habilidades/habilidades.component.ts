import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadesList1:any;
  habilidadesList2:any;

  constructor(private dataPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.obtenerDatos().subscribe(data => {
      this.habilidadesList1 = data.softSkills;
      this.habilidadesList2 = data.softSkills2;
    })
  }

}
