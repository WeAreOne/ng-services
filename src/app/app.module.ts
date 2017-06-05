import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewportService } from './services/viewport.service';

@NgModule({
  declarations: [
    AppComponent
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
