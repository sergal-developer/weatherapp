import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { tomorrowIOService } from '../services/tomorrow.io.services';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ tomorrowIOService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
