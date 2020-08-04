import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GostoService {
  getGosto(): any {
    throw new Error("Method not implemented.");
  }

  gosto: any [];

  constructor() {
    this.gosto = [
      'Gosto dos video games',
    ];
  }
  getProfesion(): any {
    return this.gosto;
  }
}
