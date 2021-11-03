import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssComponente } from './css/css.component';
import { HtmlComponente } from './html/html.component';
import { JsComponente } from './js/js.component';


@NgModule({
  declarations: [
    AppComponent,
    HtmlComponente,
    CssComponente,
    JsComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
