import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter } from "rxjs/operators";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  titulo$!: Observable<string>;
  imageBackground!: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.imageBackground = this.authService.imagenRandomFondoAuth()
    this.titulo$ = this.authService.titulo$.pipe(filter(d => d != null))
  }

  ngOnDestroy(): void {
    this.titulo$.subscribe().unsubscribe()
  }

}
