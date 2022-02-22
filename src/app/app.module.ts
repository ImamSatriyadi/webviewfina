import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UploadDokumenComponent } from './components/upload-dokumen/upload-dokumen.component';
import { FormDataPribadiComponent } from './components/form-data-pribadi/form-data-pribadi.component';
import { DataJaminanComponent } from './components/data-jaminan/data-jaminan.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UploadDokumenComponent,
    FormDataPribadiComponent,
    DataJaminanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
