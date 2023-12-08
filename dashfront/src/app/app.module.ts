import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideBardComponent } from './components/slide-bard/slide-bard.component';
import { PageAcceuilComponent } from './components/page-acceuil/page-acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideBardComponent,
    PageAcceuilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
