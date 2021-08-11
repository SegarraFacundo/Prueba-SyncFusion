import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from '../../../../settings/services/settings.service';
import { Router } from '@angular/router';
import { CONSTANTES } from '../../../constants/index';
import { ICatalogo } from '../../catalogo/interfaces/catalogo.interface';
import { IUsuario } from '../interfaces/usuario.interface';
import { CatalogoService } from '../../catalogo/services/catalogo.service';

@Injectable()
export class LoginService {
  private readonly pathUrlAPI: string;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly httpClient: HttpClient,
    private readonly catalogoService: CatalogoService,
    private readonly router: Router
  ) {
    this.pathUrlAPI = `${this.settingsService.config.urlBasePhy2service}/api/login`;
  }

  getCatalogo(): ICatalogo {
    return this.catalogoService.catalogo
  }

  setUsuario(nuevoUsuario: IUsuario) {
    sessionStorage.setItem('usuario', JSON.stringify(nuevoUsuario));
    this.router.navigate([CONSTANTES.APP_EMPRESA_ROUTE])
  }

  get usuario(): IUsuario {
    let usuarioActual = sessionStorage.getItem('usuario');
    return usuarioActual ? JSON.parse(usuarioActual) : null;
  }
}
