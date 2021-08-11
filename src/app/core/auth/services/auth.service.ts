import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CONSTANTES } from '../constants/index';
import { ICatalogo } from '../modules/catalogo/interfaces/catalogo.interface';
import { CatalogoService } from '../modules/catalogo/services/catalogo.service';
import { IUsuario } from '../modules/login/interfaces/usuario.interface';
import { LoginService } from '../modules/login/services/login.service';
import { EmpresaService } from '../modules/empresa/services/empresa.service';
import { IEmpresa } from '../modules/empresa/interfaces/empresa.interface';

@Injectable()
export class AuthService {
  private pathBaseImagenes: string;
  private extensionImagen: string;
  private cantidadImagenes: number;
  private _titulo = new Subject<string>();

  constructor(
    private catalogoService: CatalogoService,
    private loginService: LoginService,
    private empresaService: EmpresaService
  ) {
    this.pathBaseImagenes = CONSTANTES.IMAGEN_BG_PATH_BASE;
    this.extensionImagen = CONSTANTES.IMAGEN_BG_EXTENSION;
    this.cantidadImagenes = CONSTANTES.IMAGEN_BG_CANTIDAD;
    this._titulo.next('');
  }

  public imagenRandomFondoAuth(): string {
    return `${this.pathBaseImagenes}/${Math.floor(
      Math.random() * this.cantidadImagenes + 1
    )}.${this.extensionImagen}`;
  }

  public setTitulo(nuevoTitulo: string) {
    this._titulo.next(nuevoTitulo);
  }

  get titulo$(): Observable<string> {
    return this._titulo.asObservable();
  }

  setCatalogo(nuevoCatalogo: ICatalogo) {
    this.catalogoService.setCatalogo(nuevoCatalogo)
  }

  get catalogo(): ICatalogo {
    return this.catalogoService.catalogo
  }

  setUsuario(nuevoUsuario: IUsuario) {
    this.loginService.setUsuario(nuevoUsuario)
  }

  get usuario(): IUsuario {
    return this.loginService.usuario
  }

  setEmpresa(nuevaEmpresa: IEmpresa) {
    this.empresaService.setEmpresa(nuevaEmpresa)
  }

  get empresa(): IEmpresa {
    return this.empresaService.empresa
  }
}
