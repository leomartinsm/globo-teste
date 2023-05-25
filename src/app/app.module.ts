import { GlobeIssComponent } from './components/globe-iss/globe-iss.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GloboComponent } from './globo/globo.component';

@NgModule({
  declarations: [
    AppComponent,
    GloboComponent,
    GlobeIssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
