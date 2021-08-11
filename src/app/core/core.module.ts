import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './interceptors/cors.interceptor';
import { ErrorsModule } from './errors/errors.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [
    HttpClientModule,
    ErrorsModule,
    SettingsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },
  ]
})
export class CoreModule { }
