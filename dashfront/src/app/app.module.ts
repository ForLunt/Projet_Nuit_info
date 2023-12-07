import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageAcceuilComponent } from './components/page-acceuil/page-acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
