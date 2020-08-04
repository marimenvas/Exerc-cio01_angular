import { Component, OnInit } from '@angular/core';
import { AnoService } from '../services/ano.service';
import { DadosService } from '../services/dados.service';
import { AnosService } from '../services/anos.service';
import { ProfesionService } from '../services/profesion.service';
import { GostoService } from '../services/gosto.service';
import { HobbieService } from '../services/hobbie.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  nome_modulo: string = 'Produtos';
  ano: number;
  dados: any;
  anos: any;
  profesion: any;
  gosto: any;
  hobbie: any;


  constructor(aS: AnoService, dados: DadosService, anos:AnosService, profesion:ProfesionService,
     gosto:GostoService, hobbie:HobbieService,) { 
    this.ano = aS.getAno();
    this.dados = dados.getDados();
    this.anos = anos.getAnos();
    this.profesion = profesion.getProfesion();
    this.hobbie = hobbie.getHobbie();
    

   
  }

  ngOnInit(): void {
  }

}
