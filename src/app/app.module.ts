import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewportService } from './services/viewport.service';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ViewportService,
    { provide: 'SizeService', useFactory: (viewport: any) => viewport.determineService(), deps: [ ViewportService ] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
