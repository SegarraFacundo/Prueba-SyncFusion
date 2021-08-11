import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from '../../../../settings/services/settings.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { CONSTANTES } from '../../../constants/index';
import { IEmpresa } from '../interfaces/empresa.interface';
import { IUsuario } from '../../login/interfaces/usuario.interface';
import { LoginService } from '../../login/services/login.service';

@Injectable()
export class EmpresaService {
  private readonly pathUrlAPI: string;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly httpClient: HttpClient,
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {
    this.pathUrlAPI = `${this.settingsService.config.urlBasePhy2service}/api/empresas`;
  }

  getEmpresas(): Observable<IEmpresa[]> {
    return this.httpClient.get<IEmpresa[]>(this.pathUrlAPI);
  }

  getUsuario(): IUsuario {
    return this.loginService.usuario
  }

  setEmpresa(nuevaEmpresa: IEmpresa) {
    sessionStorage.setItem('empresa', JSON.stringify(nuevaEmpresa));
    this.router.navigate([CONSTANTES.APP_HOME_ROUTE])
  }

  get empresa(): IEmpresa {
    let empresaActual = sessionStorage.getItem('empresa');
    return empresaActual ? JSON.parse(empresaActual) : null;
  }
}
