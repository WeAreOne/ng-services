import { Component, Inject, ReflectiveInjector } from '@angular/core';
import { SizeService } from './services/size.service';
import { ViewportService } from './services/viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Injection de dépendances';

  constructor(@Inject('SizeService') private sizeService: SizeService) { }

  invokeServices(): void { this.sizeService.run(); }

  useInjectors(): void {
    const injector: any = ReflectiveInjector.resolveAndCreate([
      ViewportService,
      {
        provide: 'OtherSizeService',
        useFactory: (viewport: any) => viewport.determineService(),
        deps: [ ViewportService ]
      }
    ]);

    const sizeService: SizeService = injector.get('OtherSizeService');
    sizeService.run();
  }
}
