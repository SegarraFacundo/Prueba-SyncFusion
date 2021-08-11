import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICatalogo } from '../interfaces/catalogo.interface';
import { CatalogoService } from '../services/catalogo.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  catalogos!: ICatalogo[];
  estaCargando!: boolean;

  constructor(
    private authService: AuthService,
    private catalogoService: CatalogoService
  ) {}

  ngOnInit(): void {
    this.getCatalogos();
  }

  private getCatalogos() {
    this.estaCargando = true;
    this.catalogoService.getCatalogos().subscribe(
      (cs) => {
        this.catalogos = cs;
        this.estaCargando = false;
      },
      (e) => console.log(e),
      () => (this.estaCargando = false)
    );
  }

  ngAfterViewInit() {
    setTimeout(() => this.authService.setTitulo('CATÁLOGOS'), 0);
  }

  setCatalogo(catalogo: ICatalogo) {
    this.catalogoService.setCatalogo(catalogo)
  }
}
