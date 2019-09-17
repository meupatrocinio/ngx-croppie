import { NgxCroppieModule } from './modules/ngx-croppie-mp/ngx-croppie.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCroppieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
