import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  dados: any=[];

  constructor() { 
    this.dados = [
      'Meu nome é Marianela Méndez',
    ];
  }
  getDados(): any {
    return this.dados;
  }
}
