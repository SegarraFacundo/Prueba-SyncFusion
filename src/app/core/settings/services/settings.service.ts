import { Injectable, OnInit } from '@angular/core';
import { IConfig } from '../interfaces/config.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public readonly config: IConfig;

  constructor() {
    this.config = environment.config;
  }
}
