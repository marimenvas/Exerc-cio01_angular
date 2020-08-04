import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {

  profesion: any [];

  constructor() { 
    this.profesion = [
      'Sou ilustradora',
    ];
  }
  getProfesion(): any {
    return this.profesion;
  }
}

