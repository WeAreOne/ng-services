import { Injectable } from '@angular/core';
import { SizeService } from './size.service';

@Injectable()
export class CustomService implements SizeService {

  constructor() { }

  run(): void {
    console.log('Custom service...');
  }
}
