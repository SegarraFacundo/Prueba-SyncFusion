import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  backgroundImage!: string;

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private readonly router: Router,
    public authService: AuthService
  ) {
    this.form = formBuilder.group({
      username: [
        null,
        Validators.compose([Validators.required]),
      ],
      password: [null, Validators.required],
      serial: [
        this.authService.catalogo != null
          ? this.authService.catalogo.serial
          : null,
        Validators.required,
      ],
    });
  }

  ngAfterViewInit() {
    setTimeout(() => this.authService.setTitulo('LOGIN'), 0);
  }

  submitForm() {

    for (const c in this.form.controls) {
      this.form.controls[c].markAsTouched();
    }

    if (this.form.valid) {
      /*this.authService.login(this.form.value).subscribe(
        (respuesta) => {
          if (respuesta.empresa == null) {
            this.router.navigateByUrl('auth/empresas');
          } else {
            this.router.navigateByUrl(this.guardService.rutaBloqueada);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            swal({
              title: 'error',
              text: 'Error en el Front-End.',
              // icon: 'error',
              allowOutsideClick: false,
            });
          } else {
            swal({
              title: 'error',
              text: err.error.message,
              // icon: 'error',
              allowOutsideClick: false,
            });
          }
        }
      );

      */
    }
  }
}
