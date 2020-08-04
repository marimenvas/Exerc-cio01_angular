import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbieService {

  hobbie: any=[];

  constructor() { 
    this.hobbie = [
      'Meu hobbie são os video games',
    ];
  }  
  getHobbie(): any {
    return this.hobbie;
  }
}
