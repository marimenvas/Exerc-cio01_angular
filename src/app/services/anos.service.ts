import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnosService {

  anos: any [];

  constructor() { 
    this.anos = [
      'Tenho 49 anos de edade'
    ];
  }
  getAnos(): any {
    return this.anos;
  }
}
