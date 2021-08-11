import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from '../../../../settings/services/settings.service';
import { ICatalogo } from '../interfaces/catalogo.interface';
import { Router } from '@angular/router';
import { CONSTANTES } from '../../../constants/index';

@Injectable()
export class CatalogoService {
  private readonly pathUrlAPI: string;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {
    this.pathUrlAPI = `${this.settingsService.config.urlBasePhy2service}/api/catalogos`;
  }

  getCatalogos(): Observable<ICatalogo[]> {
    return this.httpClient.get<ICatalogo[]>(this.pathUrlAPI);
  }

  setCatalogo(nuevoCatalogo: ICatalogo) {
    sessionStorage.setItem('catalogo', JSON.stringify(nuevoCatalogo));
    this.router.navigate([CONSTANTES.APP_LOGIN_ROUTE])
  }

  get catalogo(): ICatalogo {
    let catalogoActual = sessionStorage.getItem('catalogo');
    return catalogoActual ? JSON.parse(catalogoActual) : null;
  }
}
