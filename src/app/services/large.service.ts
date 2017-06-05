import { Injectable } from '@angular/core';
import { SizeService } from './size.service';

@Injectable()
export class LargeService implements SizeService {

  constructor() { }

  run(): void {
    console.log('Large service...');
  }
}
