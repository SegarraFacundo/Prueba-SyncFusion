import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SideBarService {
  valorActual: boolean = false;

  public sideBarToggleSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.valorActual);

  constructor() {}

  public toggle() {
    this.valorActual = !this.valorActual;
    return this.sideBarToggleSubject.next(this.valorActual);
  }
}
