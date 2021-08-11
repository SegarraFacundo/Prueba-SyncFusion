import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit, AfterViewInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => this.authService.setTitulo('EMPRESAS'), 0);
  }
}
