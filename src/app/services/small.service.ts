import { Injectable } from '@angular/core';
import { SizeService } from './size.service';

@Injectable()
export class SmallService implements SizeService {

  constructor() { }

  run(): void {
    console.log('Small service...');
  }
}
