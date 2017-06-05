import { Injectable } from '@angular/core';
import { LargeService } from "./large.service";
import { SmallService } from "./small.service";
import { SizeService } from "./size.service";

@Injectable()
export class ViewportService {

  constructor() { }

  determineService(): SizeService {
    let w: number  = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    return (w < 800) ? new SmallService() : new LargeService();
  }
}
